# 🗃️ 리액트의 상태관리에 대하여
> ## 1️⃣ 리액트에서 상태관리는 왜 필요한가?
상태관리에 대해 공부하기 이전에, 과연 '상태'란 무엇일까? 상태란, 사물이나 현상이 처해있는 형편이나 모양을 뜻한다. 리액트 상에서는 상태는 좋아요 수, 모달창 열림 여부 등 다양한 상태가 있다. 서비스가 커질 수록 관리해야할 상태도 정말 많아지는 것이다. 이 때, 상태는 일관적이어야한다. 즉, 서로 다른 컴포넌트에서 동일한 상태를 다룬다면, 그 출처가 같아야한다는 뜻이다. 이러한 상태의 일관성은 데이터의 무결성이라고도 한다.

프로젝트가 커질 수록 상태관리는 정말 중요하다고 생각한다. Track-1을 개발하면서도 굉장히 많은 우여곡절이 있었다. 현재 접속한 유저가 보컬인지 프로듀서인지에 대한 상태 변수를 두 개나 선언해서 각각 따로 쓰고 있던 적도 있었고, 전역변수의 개수를 줄이려다가 프롭스를 14개씩 내려주거나, 한 프롭스는 depth가 4번이나 되는 엄청난 프롭스 드릴링이 일어나기도 했다. 이 프롭스가 어디에서 왔는지 루트를 찾아서 굉장히 많은 컴포넌트들을 왔다갔다했어야했다. 이렇게 프롭스가 어디서 왔는지 모르기 시작하면 결국 이미 존재하는 상태 변수를 또다시 선언하게 되고 점점 더 복잡해지기 때문에 리액트에서 상태관리는 필수적이라고 생각한다.

<br/><br/>

> ## 2️⃣ 관리 해야 하는 상태에 대한 기준은 무엇인가?
상태는 크게 전역상태(Global State)와 컴포넌트 간 상태(Cross Component State), 그리고 지역상태(Local State), 세가지로 나눌 수 있다.

 **지역상태**

지역상태는 특정 컴포넌트 안에서만 관리되는 상태이다. 그렇기 때문에 다른 컴포넌트들과 데이터를 공유하지 않는다. 

<br></br>
**컴포넌트 간 상태**

컴포넌트 간 상태는 여러가지 컴포넌트에서 관리되는 상태이다. 즉, 여러 컴포넌트에서 쓰여지고 영향을 미치는 상태이다. 컴포넌트 간 상태의 경우 상위 컴포넌트에서 하위 컴포넌트로 props를 넘겨주는 Prop Drilling 방식을 필요로 한다. (Prop Drilling이란, props를 오직 하위 컴포넌트로 전달하는 용도로만 쓰이는 컴포넌트를 거치며 컴포넌트에서 다른 컴포넌트로 데이터를 전달하는 과정)

 
<br></br>
**전역 상태**

전역 상태는 프로젝트 전체에 영향을 끼치는 상태이다. 이 또한 Prop Drilling 방식을 활용해서 부모에서 자식으로 데이터를 전달하거나, 전역상태관리 툴을 이용할 수 있다. 

<br></br>
모든 상태는 관리해야할 대상이겠지만, 프롭스 드릴링이 정말 심해져서 props를 추적하기 힘들어질 정도라면 정말로 상태관리가 필요한 상태라고 생각한다. 

<br/><br/>

> ## 3️⃣ 어떤 상태관리 라이브러리를 어떤 상황에서 사용해야 할까? 
**Redux**

- 상태 관련 로직들을 다른 파일들로 분리시켜서 사용하는 라이브러리 
- 파일이 분리되어있기 때문에 더욱 효율적으로 관리할 수 있으며 글로벌 상태 관리도 용이하게 만드는 상태관리용 라이브러리이다. 
- 리액트뿐만 아니라 일반 JavaScript 환경에서 사용할 수도 있고, Angular와 같은 다른 프레임워크에서 사용되기도 한다.
- 다른 라이브러리와 다르게 비동기 작업을 처리할 때 많이 사용되는 미들웨어가 많이 사용된다.
- redux를 사용하는 것이 좋은 상황 
    - 프로젝트의 규모가 큰 경우
    - 비동기 작업을 자주 하게 되는 경우

**Context API**
- context는 React 컴포넌트 트리 안에서 전역적(global)이라고 볼 수 있는 데이터를 공유할 수 있도록 고안된 방법이다. 
- context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있다.
- 트리 단계마다 명시적으로 props를 넘겨주지 않아도 많은 컴포넌트가 이러한 값을 공유하도록 할 수 있다. 
- 여러 레벨에 걸쳐 props 넘기는 걸 대체하는 데에 context보다 컴포넌트 합성이 더 간단한 해결책일 수도 있습니다.
- Context API를 사용하는 것이 좋은 상황 
    - 전역 데이터를 공유해야하는 상황 
    
**Recoil**
- 호환성이 좋고 단순하다. 
- Recoil을 사용하면 atoms(공유 상태)에서 selectors(순수 함수)를 거쳐 React 컴포넌트로 내려가는 data-flow graph를 만들 수 있다. Atoms는 컴포넌트가 구독할 수 있는 상태의 단위다. Selectors는 atoms 상태값을 동기 또는 비동기 방식을 통해 변환한다.
- React 비동기 처리를 위한 상태관리 라이브러리로, hooks을 이용하기 때문에 문법 자체가 리액트스럽다.
- Redux와 비교해 보일러플레이트가 많지 않으며, 러닝커브가 낮다.
- 아직 안정화 단계에 있지 않다.
- 공식 문서의 예시가 부족하다는 의견이 있다.
- recoil을 사용하는 것이 좋은 상황 
    - 편리하게 상태를 관리하고 싶은 경우
    - 호환성과 단순함을 중요하게 생각하는 경우

<br/><br/>
> ## 📚 참고자료
[리액트에서 상태관리하기](https://mingule.tistory.com/74)

[Redux](https://doqtqu.tistory.com/334)

[Recoil](https://doqtqu.tistory.com/338)