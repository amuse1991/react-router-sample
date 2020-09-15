import React from "react";
import qs from "qs";

// props.location은 현재 주소 정보를 가짐
// props.location.search 에서 쿼리스트링 조회 가능
const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const detail = query.detail === "true"; // 쿼리의 파싱결과값은 문자열입니다.

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      {detail && <p>추가적인 정보가 어쩌고 저쩌고..</p>}
    </div>
  );
};

export default About;
