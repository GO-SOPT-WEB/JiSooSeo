# **React 프로젝트의 폴더구조는 어떻게 설계하는것이 좋을까???**

리액트를 이용해서 개인, 팀 프로젝트를 몇 번 진행해보았는데, 그 때마다 프로젝트 폴더 구조를 짜는 건 항상 고민되는 일이었다. 자주 사용하는 폴더는
어떤 이름의 폴더로 넣어야할지, 함수와 상수는 어떻게 구분해 넣어야할지를 고민했었다. 특히 Track-1은 정말 정말 큰 규모의 프로젝트였기 때문에 다양한 폴더가 존재하고 다양한 요소들을 어떻게 가져올지 항상 고민이 컸다. 리팩토링을 앞두고 있는 지금도 폴더구조를 어떻게 잘 활용할지 고민 중이다.

<br/><br/>

> ## 1️⃣ Presentation Component - Container Component ↔ Custom hook ↔ Atomic를 비교해보자!

### 1 Presentation Component - Container Component

presentational & container 컴포넌트는 뷰를 좀 더 재사용 가능한 형태로 저장하는 방법이다. Container 컴포넌트는 Presentaitional 컴포넌트에 데이터를 전달하고, Presentational 컴포넌트는 props로 데이터를 전달받아 데이터를 화면에 표현한다. 즉, 실질적인 뷰 렌더링이 일어나는 곳은 presentational 컴포넌트이다.

> presentational 컴포넌트

```
// DogImages.js
import React from "react";

export default function DogImages({ dogs }) {
  return (
    <>
    <h1>Dogs</h1>
    {dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />)}
    );
    </>
}
```

> container 컴포넌트

```
// DogImagesContainer.js
import React from "react";
import DogImages from "./DogImages";

export default class DogImagesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then(res => res.json())
      .then(({ message }) => this.setState({ dogs: message }));
  }

  render() {
    return <DogImages dogs={this.state.dogs} />;
  }
}

```

이렇게 파일을 구분하여, 서로 다른 폴더에서 관리한다면, 해당 컴포넌트를 재활용할 수 있다. 만일 강아지 이미지를 받아오는 컴포넌트가 DogImages.js 이외에 또 있다면, DogImagesContainer.js를 재활용할 수 있을 것이다.

<br/><br/>

### 2 Custom hook

리액트에는 기본적으로 제공되는 훅들이 있고 이런 훅들은 정말 편리하다. 최근 자바스크립트로 과제를 수행하면서, useState, useEffect의 존재가 얼마나 고마웠는지 모른다. 그만큼 자유자재로 만들 수 있는 커스텀 훅도 꽤나 요긴하다! 위의 DogImagesContainer.js를 아래와 같이 useDogImages 훅으로 커스터마이징할 수 있다.

```
// useDogImages.js
export default function useDogImages() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breed/labrador/images/random/6')
      .then(res => res.json())
      .then(({ message }) => setDogs(message))
  }, [])

  return dogs
}

```

이렇게 커스터마이징 훅을 만들어서 위와 동일하게 DogImages.js에서 useDogImages훅을 불러다 쓰면 된다.

```
//DogImages.js
import React from "react";
import useDogImages from "./useDogImages";

export default function DogImages() {
  const dogs = useDogImages();

  return (
    <>
    <h1>Dogs</h1>
    {dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />)}
    );
    </>
}
```

presentational & container 컴포넌트와 커스텀 훅이 큰 차이가 없어보이지만, 코드를 이용하는 측면에서는 꽤 다르다. presentational & container 컴포넌트는 단순히 컴포넌트에서 컴포넌트를 호출해서 사용하는 패턴이었다. 데이터도 props로 직접 넘겨주어야하는 관계였다. 하지만, 커스텀 훅은 비즈니스 로직과 뷰를 완전히 분리하는 방법이다. 데이터를 직접 넘겨주지 않고도 `const dogs = useDogImages();` 와 같이 커스텀 훅을 바로 호출하면 된다.

<br/><br/>

### 3 Atomic

atomic은 말그대로 '원자'라는 말에서 따온 말이다. 더 이상 분리할 수 없는 원자처럼 더 이상 분리할 수 없을 정도로 세분화된 컴포넌트를 만드는 방법이 바로 atomic이다. 한 페이지가 있다면 정말 버튼 하나까지도 다른 컴포넌트로 분리하는 로직이다.

```
//DogImages.js
import React from "react";
import useDogImages from "./useDogImages";

export default function DogImages() {
  const dogs = useDogImages();

  return (
    <>
    <h1>Dogs</h1>
    {dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />)}
    );
    </>
}
```

위에서 계속 예시로 들었던 DogImages.js의 경우도 아토믹하게 한 번 더 쪼갤 수 있다.

```
//DogHedaer.js
import React from "react";
import useDogImages from "./useDogImages";

export default function DogImages() {
  const dogs = useDogImages();

  return (
    <h1>Dogs</h1>
    );
}
```

```
//DogImages.js
import React from "react";
import useDogImages from "./useDogImages";

export default function DogImages() {
  const dogs = useDogImages();

  return (
    {dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />)}
    );
}
```

<br/><br/>

> ## 2️⃣ 어떤 방식을 언제 택해야 좋은 것일까?

위의 방식들은 모두 컴포넌트를 더욱 더 쪼개면서 재사용성을 높인 방식이다. 일전에 웹잼에서 테오님께서 이런 말씀을 해주셨다. 단순히 재사용이 가능한 컴포넌트를 만드는 게 아니라, 재사용이 가능한 로직을 만드는 것이 중요하다고 말이다. ui적으로 재사용성이 높은 컴포넌트라기 보다는 여기저기서 사용되는 함수나, 상수, 훅을 분리하라는 뜻이었다. 위의 방식들이 모두 그러한 의미로는 충족이 되겠지만, 나는 커스텀 훅과 아토믹을 최대한 활용해보려고 한다. 사실 지금 진행하고 있는 프로젝트인 Track-1에서 알게 모르게 presentational & container 컴포넌트를 굉장히 많이 썼다. 전역변수를 최대한 지양하다보니, 페이지에서 데이터를 받아오고 props를 이용해서 데이터를 컴포넌트로 보내는 방법을 이용했다. 하지만 그렇게 하다보니 props를 무려 12개씩 내려주는 기이한 현상이 발생하기도 했다. 뿐만 아니라, presentational & container 컴포넌트를 가장 먼저 소개했던 Dan Abramov가 과거의 자신이 언급했던 패턴이지만 이 패턴이 현재에는 맞지 않기 때문에 그저 역사 속 한 방법으로만 보아달라고 이야기했다고 한다. 나의 경험과 이 패턴을 먼저 소개한 원작자의 말을 종합해보았을 때, presentational & container 컴포넌트를 사용하는 것이 올바른 방법이라 생각되진 않는다. 그래서, Track-1리팩토링 때에는 container 컴포넌트를 모두 커스텀 훅으로 변경해볼까 한다.

그리고 아토믹의 경우도 마찬가지다. 리액트를 사용하려는 주 목적이 바로 '재사용성'이다. 예를들어 back버튼이 여기저기서 사용될 수도 있기 때문에 최대한 분리할 수 있을 만큼 분리하는 것이 중요하다고 생각한다. Track-1을 개발하면서 가장 아쉬웠던 점이, 회원가입 페이지에 각각 다른 type을 가진 input 창이 정말 많은데 조금 도전적이라는 이유로 input을 컴포넌트로 빼지 않고 코드로 박았던 것이다. 그렇게 하다보니 한 컴포넌트의 코드량이 정말 정말 많아져서 기본 html코드와 별다른 점이 없어졌다. 아토믹하게 컴포넌트를 만들어낸다면 리액트의 가장 유의미한 장점인 재사용성을 최대한 활용할 수 있을 것이라 생각한다.

<br/><br/>

> ## 3️⃣ 프론트엔드에게 디자인 패턴이란 어떤 존재일까?

위에서 조금씩 언급했지만 프론트엔드에게 디자인 패턴이란 결국 컴포넌트를 잘 관리할 수 있는 패턴이라고 생각한다. atomic 패턴 이외에도, redux, flux 패턴 등도 존재하는데, 결국 모든 디자인 패턴의 목적은 동일하다. 데이터를 set, get하면서 컴포넌트를 용이하게 잘 관리하는 것. 개인적으로 Track-1이라는 커다란 프로젝트를 진행하다보니 디자인 패턴의 중요성을 정말 뼈저리게 느꼈다. 처음에는 굳이 이렇게까지 분리해야할까?라는 생각을 했었다. 데이터 패칭도 따로 분리하지 않고 데이터가 필요한 함수에 박았었고, 굳이 상수도 이용하지 않았었다. 하지만 갈수록 동일한 데이터를 이용하는 컴포넌트가 정말 많아졌고, 동일한 상수를 이용하는 곳도 많아져서 점점 분리를 해가기 시작했다. 그래도 여전히 프로젝트가 커져가니 여기저기서 꼬이는 일이 많아졌고, 코드가 너무나도 복잡해져갔다. 이렇게 복잡성이 증가하다 보니, 리팩토링이 엄두가 나지 않고 차라리 레포지토리를 다시 파자는 이야기가 나올 정도다. 깔끔하고 재사용성을 높여서 리액트의 최적화된 결과물을 만들어내기 위해서는 어떤 디자인 패턴을 채택할 것인지 깊이 고민하고, 그 패턴을 철저히 적용하는 것이 정말 중요하다고 생각한다.

<br/><br/>

> ## 📚 참고자료

[리액트 컴포넌트 설계](https://velog.io/@ahndong2/React-Component-%EC%84%A4%EA%B3%84)

[presentational and container](https://tecoble.techcourse.co.kr/post/2021-04-26-presentational-and-container/)

[코드](https://patterns-dev-kr.github.io/design-patterns/container-presentational-pattern/)

[atomic] (https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)

[디자인패턴](https://velog.io/@st_hwang/babwm67z)
