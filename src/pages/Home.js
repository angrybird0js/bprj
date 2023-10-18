

const Home = () => {

  return (
    <div >
        <h1>홈페이지, 라우터의 root 전자책 시작 페이지</h1>
        <p>라우터의 root은 이 페이지를 표시해야 한다.
        로그인이 없어도 책 목록을 표시하며 책장으로 가져오기와
        책읽기는 로그인을 해야 가능하다.</p>
        <p>Home.js 안에서 컴포넌트를 만든다.</p>
        <p>React-Router-Dom Package는 
        개별 project의 root folder 에서 설치해야 정상 작동했다.
        package.json의 react와 같은 위치다.</p><p/>
        
    </div>
  );
};
//components : Navbar BookList
export default Home;