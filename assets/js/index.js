document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.post-grid article').forEach((it) => {
        it.addEventListener('click', function() {
            this.querySelector('.post-link').click()
        })
    })
})
