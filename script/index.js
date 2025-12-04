const loadLessons = ()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(json => showData(json.data))
}

const loadLevelWord = (id) =>{
    // console.log(id)
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then(res => res.json())
    .then(data => displayLabelWord(data.data))
}

const displayLabelWord = (words) =>{
    // console.log(words)
    const wordContainer = document.getElementById('word-container')
    wordContainer.innerHTML = '';

    words.forEach(word=>{
        const card = document.createElement('div')
        card.innerHTML = `
        <div class="bg-white px-5 py-10 rounded-xl shadow-xl text-center space-y-5">
            <h1 class="font-bold text-2xl">${word.word}</h1>
            <p class="font-semibold">Meaning/Pronounciation</p>
            <div class="font-bangla font-medium text-2xl">
                ${word.meaning}/${word.pronunciation}
            </div>
            <div class="flex items-center justify-between">
                <button class="btn bg-[#1a91ff1a]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1a91ff1a]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `
        wordContainer.appendChild(card)
    })
}

const showData=(lessons)=>{
    // console.log(datas)
    const labelContainer = document.getElementById('label-container')
    labelContainer.innerHTML = ''
    lessons.forEach(lesson=>{
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
        <button onClick="loadLevelWord(${lesson['level_no']})" class="flex items-center justify-center gap-1 btn btn-outline btn-primary"><i class="fa-brands fa-leanpub"></i> Lesson-${lesson['level_no']}</button>
        `
        labelContainer.appendChild(btnDiv)
    })
}
loadLessons()