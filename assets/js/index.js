document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.post-list article .image-container').forEach((it) => {
        it.addEventListener('click', function() {
            this.querySelector('.post-link').click()
        })
    })
    document.getElementById('menu-toggle').addEventListener('click', function(e) {
      e.stopPropagation()
      var holder = document.getElementById('menu-holder')
      if (holder.className === 'active') {
        holder.className = ''
      } else {
        holder.className = 'active'
      }
    })
    document.getElementById('menu-holder').addEventListener('click', function (e) {
      e.stopPropagation()
      var holder = document.getElementById('menu-holder')
      holder.className = ''
    })
    document.getElementById('menu-drawer').addEventListener('click', function (e) {
      e.stopPropagation()
    })
})
