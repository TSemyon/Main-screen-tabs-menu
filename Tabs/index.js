window.addEventListener('DOMContentLoaded', () => {

   const listItems = document.querySelectorAll('.menu__item')
   const image = document.querySelectorAll('.img')
   const tabsMenu = document.querySelector('.tabs__body')

   listItems.forEach((tab, i) => {
      tab.addEventListener('click', (e) => {
         if(e.target && e.target.classList.contains('menu__item')) {
            listItems.forEach(item => {
               item.classList.remove('_active')
            })
            listItems[i].classList.add('_active')
         }
         image.forEach(img => {
            img.classList.remove('_active')
         })
         image[i].classList.add('_active')
      
      })
   })


  // Наследование //

   // function hideTabContent() {
   //    listItems.forEach(tab => {
   //       tab.classList.remove('_active')
   //    })
   //    image.forEach(img => {
   //       img.classList.remove('_active')
   //    })
   // }

   // function showTabContent(i = 0) {
   //    listItems[i].classList.add('_active')
   //    image[i].classList.add('_active')
   // }
   // hideTabContent()
   // showTabContent()

   // tabsMenu.addEventListener('click', (event) => {
   //    if(event.target && event.target.classList.contains('menu__item')) {

   //       listItems.forEach((item, i) => {
   //          if(event.target == item) {
   //             hideTabContent()
   //             showTabContent(i)
   //          }
   //       })
   //    }
   // })

})






