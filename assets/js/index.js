document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.post-grid article').forEach((it, index) => {
        it.addEventListener('click', function() {
            this.querySelector('.post-link').click()
        })
    })
})
