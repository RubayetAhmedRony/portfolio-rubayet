tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto': 'repeat( auto-fit, minmax(200px, 1fr))'
            },
            fontFamily:{
                Outfit:["Outfit", "sans-serif"],
                Ovo:["Ovo", "serif"]
            },
            animation:{
                spin_slow:'spin 6s linear infinite'
            },
            colors:{
                lightHover:'#fcf4ff',
                darkHover:'#2a004a',
                darkTheme:'#11001F',
            },
            boxShadow:{
                'black':'4px 4px 0 #000',
                'white':'4px 4px 0 #fff',
            }
        }
    },

       darkMode:'selector'
        }

        //--------light mode and dark mode---------

        document.documentElement.classList.toggle(
            'dark',
            localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
          )
       function toggleTheme(){
        document.documentElement.classList.toggle('dark');
        if( document.documentElement.classList.contains('dark')){
            localStorage.theme = 'dark';

        }else{
            localStorage.theme ='light';
        }
       }