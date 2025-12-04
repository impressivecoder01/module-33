const loadLessons = ()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(json => showData(json.data))
}

const showData=(lessons)=>{
    // console.log(datas)
    const labelContainer = document.getElementById('label-container')
    labelContainer.innerHTML = ''
    lessons.forEach(lesson=>{
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
        <button class="flex items-center justify-center gap-1 btn btn-outline btn-primary"><i class="fa-brands fa-leanpub"></i><a
        href="">Lesson</a></button>
        `
        labelContainer.appendChild(btnDiv)
    })
}
loadLessons()