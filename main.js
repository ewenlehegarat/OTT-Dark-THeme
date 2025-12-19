const buttonDepliant = document.querySelector('.button_depliant')
const ionIcon = document.querySelector('ion-icon')
const buttonsContainer = document.querySelector('.buttons_container')
const backgroundButton = document.querySelector('.background_button')
const homeLink = document.querySelector('.home')
const movieLink = document.querySelector('.movie')
const supportLink = document.querySelector('.support')
const subsLink = document.querySelector('.subs')
const textContainerP = document.querySelector('.text_container p')
const textDeviceP = document.querySelector('.device_text p')
const cardTitle = document.querySelectorAll('.card_title')
const paragrapheMobile = document.querySelectorAll('.paragraphe_mobile')
const paragraphePc = document.querySelectorAll('.card_title .text_container p')
const iconPlus = document.querySelectorAll('.icon_plus')
const monthlyText = document.querySelector('.monthly_text')
const yearlyText = document.querySelector('.yearly_text')
const backgroundTabs = document.querySelector('.background_tabs')

isClosed = true

    if(window.innerWidth < 1440){
        textContainerP.textContent = 'StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.'
        textDeviceP.textContent = 'With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere.'
        buttonDepliant.addEventListener('click', ()=>{
            if(isClosed){
                ionIcon.name = 'close-outline';
                buttonsContainer.style.display = 'flex'
            }else{
                ionIcon.name = 'menu-outline';
                buttonsContainer.style.display = 'none'
            }
            isClosed = !isClosed
        })
        
        movieLink.addEventListener('mouseover', ()=>{
            setTimeout(()=>{
                movieLink.style.color = 'var(--White)'
                movieLink.style.fontWeight = '500'
            },250)
            homeLink.style.color = 'var(--Grey-75)'
            backgroundButton.style.top = '92px'
            movieLink.addEventListener('mouseout', ()=>{
                setTimeout(()=>{
                    homeLink.style.color = 'var(--White)'
                    homeLink.style.fontWeight = '400'
                },200)
                movieLink.style.color = 'var(--Grey-75)'
                backgroundButton.style.top = '20px'
            })
        })

        supportLink.addEventListener('mouseover', ()=>{
            setTimeout(()=>{
                supportLink.style.color = 'var(--White)'
                supportLink.style.fontWeight = '500'
            },250)
            backgroundButton.style.top = '164px'
            homeLink.style.color = 'var(--Grey-75)'
            supportLink.addEventListener('mouseout', ()=>{
                setTimeout(()=>{
                    homeLink.style.color = 'var(--White)'
                },300)
                backgroundButton.style.top = '20px'
                supportLink.style.color = 'var(--Grey-75)'
                homeLink.style.fontWeight = '400'
            })
        })
        
        subsLink.addEventListener('mouseover', ()=>{
            setTimeout(()=>{
                subsLink.style.color = 'var(--White)'
                subsLink.style.fontWeight = '500'
            },250)
            backgroundButton.style.top = '236px'
            homeLink.style.color = 'var(--Grey-75)'
            subsLink.addEventListener('mouseout', ()=>{
                setTimeout(()=>{
                    homeLink.style.color = 'var(--White)'
                    homeLink.style.fontWeight = '400'
                },300)
                backgroundButton.style.top = '20px'
                subsLink.style.color = 'var(--Grey-75)'
            })
        })
        
        cardTitle.forEach((card, index) => {
            card.addEventListener('click', () => {
            if(isClosed){
                paragrapheMobile[index].style.display = 'block'
                iconPlus[index].src = 'img/icon_moins.png'
            }else if(!isClosed){
                paragrapheMobile[index].style.display = 'none'
                iconPlus[index].src = 'img/icon_plus.png'
            }
            isClosed = !isClosed
            })
        })

        yearlyText.addEventListener('click', ()=>{
            backgroundTabs.style.left = '100px'
            // backgroundTabs.style.width = '70px'
            yearlyText.style.color = '#fff'
            monthlyText.style.color = '#999999'
        })

        monthlyText.addEventListener('click', ()=>{
            backgroundTabs.style.left = '8px'
            // backgroundTabs.style.width = '86px'
            monthlyText.style.color = '#fff'
            yearlyText.style.color = '#999999'
        })

    }else if(window.innerWidth > 1440 || window.innerWidth < 1920){
        textContainerP.textContent = 'StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.'
        textDeviceP.textContent = 'With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.'
        movieLink.addEventListener('mouseover', ()=>{
            setTimeout(()=>{
                movieLink.style.color = 'var(--White)'
                movieLink.style.fontWeight = '500'
            },250)
            homeLink.style.color = 'var(--Grey-75)'
            backgroundButton.style.left = '92px'
            backgroundButton.style.width = '126px'
            movieLink.addEventListener('mouseout', ()=>{
                setTimeout(()=>{
                    homeLink.style.color = 'var(--White)'
                    homeLink.style.fontWeight = '400'
                },200)
                movieLink.style.color = 'var(--Grey-75)'
                backgroundButton.style.left = '10px'
                backgroundButton.style.width = '79px'
            })
        })
        supportLink.addEventListener('mouseover', ()=>{
            setTimeout(()=>{
                supportLink.style.color = 'var(--White)'
                movieLink.style.fontWeight = '500'
            },250)
            homeLink.style.color = 'var(--Grey-75)'
            backgroundButton.style.left = '230px'
            supportLink.addEventListener('mouseout', ()=>{
                setTimeout(()=>{
                    homeLink.style.color = 'var(--White)'
                    homeLink.style.fontWeight = '400'
                },300)
                supportLink.style.color = 'var(--Grey-75)'
                backgroundButton.style.left = '10px'
            })
        })

        subsLink.addEventListener('mouseover', ()=>{
            setTimeout(()=>{
                subsLink.style.color = 'var(--White)'
                movieLink.style.fontWeight = '500'
            },250)
            homeLink.style.color = 'var(--Grey-75)'
            backgroundButton.style.left = '316px'
            backgroundButton.style.width = '120px'
            subsLink.addEventListener('mouseout', ()=>{
                setTimeout(()=>{
                    homeLink.style.color = 'var(--White)'
                    homeLink.style.fontWeight = '400'
                },300)
                subsLink.style.color = 'var(--Grey-75)'
                backgroundButton.style.left = '10px'
                backgroundButton.style.width = '79px'
            })
        })

        cardTitle.forEach((card, index) => {
            card.addEventListener('click', () => {
            if(isClosed){
                paragraphePc[index].style.display = 'block'
                iconPlus[index].src = 'img/icon_moins.png'
            }else if(!isClosed){
                paragraphePc[index].style.display = 'none'
                iconPlus[index].src = 'img/icon_plus.png'
            }
            isClosed = !isClosed
            })
        })
    }else if(window.innerWidth < 1920){
        textContainerP.textContent = 'StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.'
        textDeviceP.textContent = 'With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.'
    }