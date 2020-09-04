# 4Fooooder
svgmap 오픈소스와 위키피디아에서 수집한 데이터를 시각화하는 음식 지도

# 프로젝트 정보

## 설치
노드 설치(v12.18.3)
<br>
https://nodejs.org/ko/ 에서 OS에 맞게 설치한다.

npm 설치
<br>
npm은 node package Manager이어서 노드를 설치할 때 같이 설치되지만,
설치가 필요한 경우에는 아래 커맨드를 사용한다. -v 옵션을 사용해 버전을 확인할 수 있다.
```
npm install
npm -v
```

ejs 설치
<br>
html 파일을 렌더링하기 위해 ejs 모듈을 사용했다.(사용한 버전: 6.x.x)
```
npm install ejs
```

express 설치
<br>
node서버 생성을 위해 express 모듈을 사용했기 때문에 npm을 이용해 설치해준다. -v 옵션을 이용해 버전 확인가능하다.(사용한 버전: 6.x.x)
```
npm install express
npm express -v
```

mysql 설치
<br>
https://dev.mysql.com/downloads/mysql/ 에서 OS 버전에 맞게 다운받는다. -V 옵션을 이용해 설치 여부 및 버전 확인이 가능하다.(사용한 버전: 8.0.21) 
```
mysql -V
```

# 사용방법

데이터셋 생성
```
CREATE TABLE `테이블명` (
  `No` INT NOT NULL,
  `continent` VARCHAR(1024) NOT NULL,
  `short` VARCHAR(1024) NOT NULL,
  `country` VARCHAR(1024) NOT NULL,
  `food` VARCHAR(1024) NOT NULL,
  `foodexplain` VARCHAR(4096) NULL,
  `photourl` MEDIUMTEXT NULL,
  `nonwikiurl` VARCHAR(1024) NULL,
  `etc` VARCHAR(1024) NULL,
  PRIMARY KEY (`No`));
  ```
  data폴더의 food.csv 파일을 해당 테이블에 import한다.



터미널에서 index.js가 들어있는 폴더로 이동해 서버를 실행시킨다.
```
 node index.js
```
브라우저에 localhost:9999를 입력하면 메인 지도 페이지가 뜬다.


데이터가 있는 나라는 분홍색으로 표시된다. 분홍색 나라 위에 커서를 올리면 해당 나라의 음식 사진이 뜬다.
![1](https://user-images.githubusercontent.com/48848525/90511931-3d6c2e80-e198-11ea-982f-a8aa17fa4b6b.png)

데이터가 없는 나라의 경우 나라의 색이 노란색으로 나오며 아래와 같은 화면이 나온다
![2](https://user-images.githubusercontent.com/48848525/90512850-bf108c00-e199-11ea-8275-2bc558060238.png)

검색창에 나라이름을 검색하면 해당 나라의 음식에 대한 정보가 담긴 사이트가 나타난다. 
![3](https://user-images.githubusercontent.com/48848525/90512929-dc455a80-e199-11ea-9b43-7ca84810a289.png)

왼쪽 상단의 back버튼을 누르면 이전 화면으로 돌아간다.
![4](https://user-images.githubusercontent.com/48848525/90513038-08f97200-e19a-11ea-8229-a0585aaf89c4.png)

검색 결과가 없을 경우에는 아래와 같이 나타난다. 마찬가지로 back 버튼을 누르면 이전 화면으로 돌아간다.
![5](https://user-images.githubusercontent.com/48848525/90513100-1e6e9c00-e19a-11ea-8afd-8bcb1cec3490.png)

# LICENSE

svgMap
https://github.com/StephanWagner/svgMap
