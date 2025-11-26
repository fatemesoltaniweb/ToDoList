 let flag = 1
        const dark = document.querySelector('.dark')
        const h1 = document.querySelector('h1')
        const btn = document.querySelector('button')
        const inp = document.querySelector('input')
        let arr = []

        //get local storage//
        let x = JSON.parse(localStorage.getItem('data'))
        if (x != undefined) {
            arr = [...x]
            arr.forEach((item) => {
                generateLi(item)
            })
        }
        //get local storage//


        dark.addEventListener('click', () => {
            if (flag % 2) {
                dark.children[0].style.transform = 'translateX(40px)'
                dark.classList.add('toggle')
                dark.parentElement.parentElement.style.background = 'black'
                h1.style.color = 'white'
                dark.children[0].style.background = 'white'
            } else {
                dark.children[0].style.transform = 'translateX(0px)'
                dark.classList.remove('toggle')
                dark.parentElement.parentElement.style.background = 'white'
                h1.style.color = 'black'
                dark.children[0].style.background = 'black'
            }
            flag++
        })
       
        btn.addEventListener('click', () => {
            let tempVal = inp.value
            if (tempVal == '') {
                alert('Fill Your Do!')
            } else {
                generateLi(tempVal)
                arr.push(tempVal)
                localStorage.setItem('data', JSON.stringify(arr))
            }
        })
        function generateLi(val) {
            const li = document.createElement('li')
            li.innerHTML = `
        <div>
            <h2>${val}</h2>
        </div>
        <div>
            <span onclick="myCheck(this)" class="material-symbols-outlined">check</span>
            <span onclick="myEdit(this)" class="material-symbols-outlined">edit</span>
            <span onclick="myDel(this)" class="material-symbols-outlined">delete</span>
        </div>
    `

            taskList.appendChild(li);
            inp.value = null
            inp.focus()
        }


        function myDel(d) {
            if (confirm('Are You Sure'))
                d.parentElement.parentElement.remove()

        }


        function myEdit(ed) {
            const liElement = ed.parentElement.parentElement.children[0]
            liElement.setAttribute("contenteditable", "true");
            liElement.focus()

        }

        function myCheck(ch) {
            const liElement = ch.parentElement.parentElement.children[0];

            if (liElement.classList.contains('unText')) {
                liElement.classList.remove('unText');
            } else {
                liElement.classList.add('unText');
            }
        }
