import React, { useState } from 'react'
import Naver from './Naver'
import { useNavigate } from 'react-router-dom';





function Home() {
  const navigate = useNavigate();
  const [mode,setMode] = useState(true);
   const [data,setData] = useState([
    {id:1,txt:'sdfsdfsdf',state:false},
    {id:2,txt:'sdfsdfsdfsdfsdfsdfs',state:false},
    {id:3,txt:'1212121', state:false},
    {id:4,txt:'sdfsdfsdsdfsdf23232323232f', state:false}
  ]);

  let time=null;
  function down(id){
    let rollback = data.filter(obj=>obj.state == true);
    if(!rollback.length) {
      setMode(true);
      console.log('모드해제')
    }
    
    time = setTimeout(()=>{
        setMode(false)
    },1000)
  }
  
  function up(){
    console.log('up');
    clearTimeout(time);    
  }

  function move(id){
    if(mode){
      navigate('/css')
    }else{
      setData(
        data.map(obj=>{
          if(obj.id == id) obj.state=!obj.state;
          return obj;
        })
      )
    }
  }


  return (
    <>

    <ul>
      {
        data.map(obj=>(
          <li key={obj.id} onMouseDown={()=>{down(obj.id)}} onMouseUp={up} onClick={()=>{move(obj.id)}}  className={obj.state ? 'on':''}> {obj.txt} </li>
        ))
      }
     
    </ul>




        <h2>React 프로젝트 생성 및 실행</h2>
        1. 비주얼코드 (react폴더 열기) <br />
        2. 터미널(ctrl + j) <br />
        3. window10 프로젝트 모듈 설치 (npm  i  g  create-react-app) <br />
        4. 프로젝트 생성 (<b>npx create-react-app basic</b>) <br />
        5. 프로젝트폴더 이동 (<b>cd basic</b>) <br />
           ㄴ change directory의 약자로 dos상에서 사용하는 명령(cd..상위폴더로 이동)<br />
        6. 프로젝트 실행 및 중지(실행-<b>npm start</b> / 중지-ctrl + c)<br />

        <h2>폴더 구조</h2>
        * node_modules (npm install 을 통해 설치된 모듈들이 위치하는 폴더)<br />
        * public (static 자원이 위치하는 폴더)<br />
        * src (작업폴더-components,css,js...등)<br />
        * package파일 (version, dependencies, proxy, git 등의 정보)

        <h2>문법</h2>
        * JSX (JavaScript XML) - JavaScript를 확장한 문법입니다.<br/>
        * Fragments (&#60;&#62; &#60;/&#62;) - DOM에 별도 노드를 추가하지 않고 자식 목록을 그룹화할 수 있음 <br/>
        * 파일 가져오기 (import 별칭 from "./파일") <br/>
        * 파일 내보내기 (export default 컨포넌트명)
    </>
  )
}

export default Home