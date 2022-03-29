    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            getusers(response)
        })
        .catch(function (error) {
            console.log(error);
        })

    let left = document.querySelector('.user')
    let triplstop
    let arrs
    let concern = 0
    let course_modal = document.querySelector('.course-modal')
    let bg_modal = document.querySelector('.bg-modal')
    let body = document.querySelector('body')
    let form = document.querySelector('form')
    let search = document.querySelector('.search')
    const getusers = (arr) => {
        arrs = arr.data
        localStorage.setItem('mass', arrs)
        let good__id = localStorage.getItem('id');
        let good__good__id = JSON.parse(good__id)
        CreateUser(arrs, 'no')
        find__imposter(good__good__id)
        search.onclick = () => {
            searchs(arrs)
        }
    }

    const searchs = (arr) => {
        let heder = document.querySelector('header')
        heder.innerHTML = ' '
        let input = document.createElement('input')
        input.setAttribute('placeholder', 'Найти пользователя')
        heder.append(input)
        let searchedItem = arr
        input.onkeyup = () => {
            searchedItem = arr.filter(item => item.name.includes(input.value))
            let number = searchedItem.length
            CreateUser(searchedItem, number)
        }
    }

    let modal
    const CreateUser = (mass, havemodal) => {
        clear()
        let h6 = document.createElement('h1')
        if (havemodal == 0) {
            let text = 'таких контактов нет'
            h6 = document.createElement('h1')
            h6.innerHTML = text
            console.log(text);
        } else {
            h6.remove()
        }
        left.append(h6)
        for (const item of mass) {
            left.innerHTML += `<div class="item" id='${item.id}'>
        <div class="left-item">
        <img src="./svg/user.png" alt="user">
        <div class="text" id='${item.id}'>
        <p>${item.name}</p>
        <span class="passive">${item.phone}</span>
        </div>
        </div>
        <div class="raight">
        <svg width="36" height="56" viewBox="0 0 36 56" fill="none" class='izbr' id='${item.id}'
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1 53V1H35V53L18 36L1 53Z" stroke="black" stroke-width="2" />
        </svg>
        <svg width="68" height="13" viewBox="0 0 68 13" fill="none" class='triplstop'
        xmlns="http://www.w3.org/2000/svg">
        <path
        d="M33.5 13C37.0899 13 40 10.0899 40 6.5C40 2.91015 37.0899 0 33.5 0C29.9101 0 27 2.91015 27 6.5C27 10.0899 29.9101 13 33.5 13Z"
        fill="black" fill-opacity="0.64" />
        <path
        d="M61 13C64.866 13 68 10.0899 68 6.5C68 2.91015 64.866 0 61 0C57.134 0 54 2.91015 54 6.5C54 10.0899 57.134 13 61 13Z"
        fill="black" fill-opacity="0.64" />
        <path
        d="M6.5 13C10.0899 13 13 10.0899 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13Z"
        fill="black" fill-opacity="0.64" />
        </svg>
        </div>
        </div> `
        }
        triplstop = document.querySelectorAll('.triplstop')
        modals()
        modalss()
        let text = document.querySelectorAll('.text')
        for (const item of text) {
            item.onclick = () => {
                let id__text = item.getAttribute('id')
                edit__left(id__text)
            }
        }
    }

    const modals = () => {
        for (const item of triplstop) {
            item.onclick = () => {
                modal = ` <div class="modal__item">
            <div class="text__modal">
            <p>Информация об Олеге</p>
            <div></div>
            <p>Удалить пользователя</p>
            <div></div>
            <p>Изменить пользователя</p>
            </div>
            </div>`
                if (concern == 0) {
                    item.innerHTML += modal
                    concern++
                } else {
                    item.innerHTML = ' '
                    concern--
                }
                CreateUser(arrs)
            }
        }
    }

    const clear = () => {
        left.innerHTML = ' '
    }

    let izbr = []
    let ids = []

    const modalss = () => {
        let izbrs = document.querySelectorAll('.izbr')
        for (const item of izbrs) {
            item.onclick = () => {
                if (item.getAttribute('data-done') == 'yes') {
                    console.log('ты что делаешь');
                } else {
                    let id = item.getAttribute('id')
                    item.setAttribute('data-done', 'yes')
                    item.classList.add('fills')
                    ids.push(id)
                    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                        .then(function (response) {
                            izbr.push(response.data)
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                    localStorige()
                }
            }
        }
    }

    let izbran = document.querySelector('.izbran')
    let asd = document.querySelector('.asd')

    izbran.onclick = () => {
        asd.classList.add('pasive')
        izbran.classList.remove('pasive')
        locla__read()
    }

    asd.onclick = () => {
        asd.classList.remove('pasive')
        izbran.classList.add('pasive')
        let good__id = localStorage.getItem('id');
        let good__good__id = JSON.parse(good__id)
        CreateUser(arrs)
        find__imposter(good__good__id)
    }

    const localStorige = () => {
        let sizbr = JSON.stringify(izbr);
        localStorage.setItem('arr', sizbr);
        let idss = JSON.stringify(ids);
        localStorage.setItem('id', idss);
    }

    const locla__read = () => {
        let good__arr = localStorage.getItem('arr');
        let good__id = localStorage.getItem('id');
        let good__good__arr = JSON.parse(good__arr)
        let good__good__id = JSON.parse(good__id)
        CreateUser(good__good__arr)
        find__imposter(good__good__id)
    }

    const find__imposter = (arr) => {
        let izbrs = document.querySelectorAll('.izbr')
        let num
        for (const item of arr) {
            num = item
            for (const item of izbrs) {
                if (item.getAttribute('id') == num) {
                    item.setAttribute('data-done', 'yes')
                    item.classList.add('fills')
                }
            }
        }

    }
    const edit__left = (id) => {
        let inf = document.querySelector('.inf')
        let find = arrs.find(item => item.id == id)
        let idx = arrs.indexOf(find)
        inf.innerHTML = `   <p>Имя:     ${arrs[idx].username}</p>
                        <p>Фамилия: ${arrs[idx].name}</p>
                        <p>Номер: ${arrs[idx].phone}</p>
                        <p>Почта: ${arrs[idx].email}</p>
                        <p>Улица проживани: ${arrs[idx].address.street}</p>
                        <p>Город: ${arrs[idx].address.city}</p>
                        <p>Веб-сай: ${arrs[idx].website}</p>
                        <p>Компания: ${arrs[idx].company.name}</p>`
        anim(find)
    }


    const createmobile = (input, text, arr, data_del) => {
        let arr_name_for_inp = ['username', 'email', 'address.street', 'address.city', 'website', 'name']
        let arr_plesholder_for_inp = [arr.username, arr.email, arr.address.street, arr.address.city, arr.website, arr.company.name]
        form.innerHTML = ' '
        let inputmobail
        let h1mobil = document.createElement('h3')
        let h2mobil = document.createElement('h4')
        let buton = document.createElement('button')
        let buton2 = document.createElement('button')
        if (data_del == 'yes') {
            h1mobil.innerText = `Вы точно хотите удалить 
        пользователя ${arr.name} ?`
            h1mobil.classList.add('del')
            buton.innerText = 'Да'
            buton.classList.remove('create')
            buton.classList.add('delites')
            buton2.classList.add('delites')
            buton2.classList.add('delite2')
            buton2.innerText = 'Нет'
            form.append(h1mobil, h2mobil)
        } else {
            h1mobil.innerText = arr.name
            h2mobil.innerText = arr.phone
            buton.classList.add('create')
            buton.classList.remove('delites')
            buton2.classList.remove('delites')
            buton2.classList.remove('delite2')
            buton.innerText = 'Сохранить изменения'
            buton2.innerText = 'Отмена'
            form.append(h1mobil, h2mobil)
            input--
        }
        for (let i = 0; i < input; i++) {
            inputmobail = document.createElement('input')
            inputmobail.setAttribute('type', 'text')
            inputmobail.setAttribute('value', arr_plesholder_for_inp[i])
            inputmobail.setAttribute('name', arr_name_for_inp[i])
            form.append(inputmobail)
        }
        form.append(buton, buton2)
        anim()
        REGEX()
    }

    const closeModal = () => {
        bg_modal.style.opacity = "0"
        course_modal.style.opacity = "0"
        course_modal.style.width = "0px"
        course_modal.style.height = '0px'
        body.style.overflow = 'scroll'
        setTimeout(() => {
            bg_modal.style.display = "none"
            course_modal.style.display = "none"
            course_modal.classList.remove('mobail-modal')
        }, 100);
    }

    const showModal = (width, haight, input, text, arr, data_del) => {
        bg_modal.style.display = "block"
        course_modal.style.display = "flex"
        body.style.overflow = 'hidden'
        course_modal.style.width = width
        course_modal.style.height = haight
        setTimeout(() => {
            bg_modal.style.opacity = "1"
            course_modal.style.opacity = "1"
        }, 100);

        setTimeout(() => {
            course_modal.classList.add('mobail-modal')
        }, 150);

        createmobile(input, text, arr, data_del)
    }

    const anim = (arr) => {
        let butns = document.querySelectorAll('button[data-but]')
        for (const but of butns) {
            but.onclick = () => {
                let valueinnrTEXT = but.innerText
                let data_del = but.getAttribute('data-del')
                let width = but.getAttribute('data-with')
                let haight = but.getAttribute('data-haight')
                let input = but.getAttribute('data-input')
                showModal(width, haight, input, valueinnrTEXT, arr, data_del)
            }
        }
    }

    const REGEX = () => {
        form.onsubmit = () => {
            event.preventDefault()
            let fm = new FormData(form)
            let Create_New_Task = {
                id: Math.random(),
                addres: {
                    city: '',
                    street: ''
                }
            }
            fm.forEach((a, b) => {
                Create_New_Task[b] = a
            })
            let butensclose = document.querySelectorAll('.create')
            for (const but of butensclose) {
                but.onclick = () => {
                    arrs.push(Create_New_Task)
                    closeModal()
                }
            }
        }
    }