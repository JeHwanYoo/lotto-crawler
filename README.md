## 설명

나눔 로또 6/45의 역대 당첨 번호를 크롤링 합니다.

## 다운로드

```
git clone https://github.com/JeHwanYoo/lotto-crawler.git
```

## 크롤링

```
npm install # 패키지를 설치합니다.
npm run build # 패키지를 빌드합니다.
npm run start 1 965 # 1부터 965회까지 로또 번호를 가져옵니다.
```

## 데이터셋

```
[
    {
        no: Number // 로또 회차
        numbers: Number[] // 로또 번호 (마지막 보너스 번호)
    }
]
```
