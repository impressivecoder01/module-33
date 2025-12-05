const loadLessons = ()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(json => showData(json.data))
}
const removeActive = () => {
    const lessonButton = document.querySelectorAll(".lesson-btn")
    lessonButton.forEach(btn=> btn.classList.remove('active'))
}
const loadLevelWord = (id) =>{
    // console.log(id)
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then(res => res.json())
    .then(data => {
        displayLabelWord(data.data)
        const clickedBtn = document.getElementById(`lesson-btn-${id}`)
        removeActive()
        clickedBtn.classList.add('active')
    })
}

const displayLabelWord = (words) =>{
    // console.log(words)
    const wordContainer = document.getElementById('word-container')
    wordContainer.innerHTML = '';
    if(words.length <= 0){
        wordContainer.innerHTML=''
        const next = document.createElement('div')
        wordContainer.innerHTML = `
        <div class="col-span-full space-y-2 text-center">
            <img class='mx-auto' src="./assets/alert-error.png" alt="error">
            <p class="text-xs font-bangla text-[#79716b]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h1 class="font-semibold text-3xl">নেক্সট Lesson এ যান</h1>
        </div>
        `
        wordContainer.appendChild(next)
        return;
        
    }
    words.forEach(word=>{
        const card = document.createElement('div')
        card.innerHTML = `
        <div class="bg-white px-5 py-10 rounded-xl shadow-xl text-center space-y-5">
            <h1 class="font-bold text-2xl">${word.word? word.word : 'word did not found'}</h1>
            <p class="font-semibold">Meaning/Pronounciation</p>
            <div class="font-bangla font-medium text-2xl">
                ${word.meaning? word.meaning : 'meaning did not found'}/${word.pronunciation}
            </div>
            <div class="flex items-center justify-between">
                <button onclick='my_modal_5.showModal()' class="btn bg-[#1a91ff1a]"><i class="fa-solid fa-circle-info"></i></button>
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
        <button id="lesson-btn-${lesson.level_no}" onClick="loadLevelWord(${lesson['level_no']})" class="flex lesson-btn items-center justify-center gap-1 btn btn-outline btn-primary"><i class="fa-brands fa-leanpub"></i> Lesson-${lesson['level_no']}</button>
        `
        labelContainer.appendChild(btnDiv)
    })
}
loadLessons()