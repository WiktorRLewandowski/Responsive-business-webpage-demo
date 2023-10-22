(() => {
    const btnContainer = document.querySelector('.portfolio__filter')
    const filterBtn = document.querySelectorAll('.portfolio__button')
    const filteredElements = document.querySelectorAll('.portfolio__cards li')

    function filterHandler(evt) {
        if (evt.target.nodeName !== "BUTTON") return
        
        const category = evt.target.dataset.filter

        filteredElements.forEach(el => el.classList.add('hidden'))

        filterBtn.forEach(el => (
            el === evt.target
                ? el.classList.add('active')
                : el.classList.remove('active')
        ))
        
        if (category === 'all') {
            filterBtn[0].classList.add('active')
            filteredElements.forEach(el => (
                el.classList.remove('hidden')
            ))
        } else {
            filteredElements.forEach(el => (
                el.dataset.filter === category
                    ? el.classList.remove('hidden')
                    : el.classList.add('hidden')
            ))
        }
    }

    btnContainer.addEventListener("click", filterHandler)
})();