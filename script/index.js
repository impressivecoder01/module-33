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
        <p>c</p>
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