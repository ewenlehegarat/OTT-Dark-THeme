const buttonDepliant = document.querySelector('.button_depliant')
const ionIcon = document.querySelector('ion-icon')
const buttonsContainer = document.querySelector('.buttons_container')
const backgroundButton = document.querySelector('.background_button')
const homeLink = document.querySelector('.home')
const movieLink = document.querySelector('.movie')
const supportLink = document.querySelector('.support')
const subsLink = document.querySelector('.subs')
const textContainerP = document.querySelector('.text_container p')

isClosed = true

    if(window.innerWidth < 1440){
        textContainerP.textContent = 'StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.'
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
    }else if(window.innerWidth > 1440 || window.innerWidth < 1920){
        textContainerP.textContent = 'StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.'
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
    }else if(window.innerWidth < 1920){
        textContainerP.textContent = 'StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.'
    }