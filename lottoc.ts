import $ from 'axios'
import fs from 'fs'
const start = parseInt(process.argv[2])
const end = parseInt(process.argv[3])

interface LottoNumbers {
    drwtNo1: Number,
    drwtNo2: Number,
    drwtNo3: Number,
    drwtNo4: Number,
    drwtNo5: Number,
    drwtNo6: Number,
    bnusNo: Number,
}

interface LottoData {
    no: Number,
    numbers: Number[],
}

const lottos: Array<LottoData> = []
let progress = 0
const total = end - start + 1

;(async () => {
    for (let i = start; i <= end; i++) {
        const res = await $.get(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${i}`)
        const { drwtNo1, drwtNo2, drwtNo3, drwtNo4, drwtNo5, drwtNo6, bnusNo } = res.data as LottoNumbers
        progress++
        lottos.push({
            no: i,
            numbers: [drwtNo1, drwtNo2, drwtNo3, drwtNo4, drwtNo5, drwtNo6, bnusNo]
        })
        console.log(`${progress}/${total}`)
    }
    fs.writeFileSync(`results/lottos-${start}-${end}.json`, JSON.stringify(lottos))
    console.log('done')
})()

