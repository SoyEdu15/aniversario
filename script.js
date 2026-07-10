/* ==========================================================================
   ANIVERSARIO - SCRIPT.JS
   Lógica e interactividad para el sitio web especial
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. CONFIGURACIÓN INICIAL ---
    // Define la fecha de tu aniversario aquí (Formato: Año, Mes (0-11), Día, Hora, Minuto)
    // Meses en JS son indexados en 0: 0 = Enero, 4 = Mayo, 11 = Diciembre, etc.
    // Ejemplo: 10 de Julio de 2025 a las 10:00 a. m. -> new Date(2025, 6, 10, 10, 0, 0)
    const fechaAniversario = new Date(2025, 6, 10, 10, 0, 0);

    // Lista de razones románticas
    const razones = [
        "Porque sabes cómo hacerme sonreír incluso en los días más difíciles.",
        "Por apoyarme en mis metas.",
        "Por la manera en la que me miras✨",
        "Porque cada pequeño momento",
        "Por tu inteligencia y las cosas que me enseñas",
        "Porque me inspiras a ser una mejor versión de mí mismo todos los días.",
        "Por tus abrazos que me han ayudado muchas veces a sentirme seguro y amado.",
        "Porque amo cómo te ríes y tus chistes ",
        "Por ser mi Solecito",
        "Porque contigo senti y siento amor en susestado mas puro",
        "Por tu forma tan linda de cuidar de mí",
        "Porque con solo existir haces de este mundo un lugar mejor ",
        "Porque me has demostrado que asi tenga poco o mucho vas a estar para mi",
        "Por ayudarme a conetar mi vida espiritual",
        "Por hacerme sentir que casarme si es una meta",
        "Por defenderme cuando no estoy",
        "Por darme esa seguridad y el luagar de tu novio/futuro esposo ante los demas"
    ];

    // --- 2. LLUVIA DE CORAZONES FLOATING ---
    const heartsContainer = document.getElementById('hearts-container');
    const heartIcons = ['fa-heart', 'fa-heart-broken', 'fa-heartbeat', 'fa-kiss-wink-heart']; // Principalmente usaremos fa-heart

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        
        // El 90% serán corazones normales, 10% variaciones
        const isStandard = Math.random() > 0.1;
        if (isStandard) {
            heart.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            const randomIcon = heartIcons[Math.floor(Math.random() * heartIcons.length)];
            heart.innerHTML = `<i class="fas ${randomIcon}"></i>`;
        }

        // Posición y tamaño aleatorio
        const size = Math.random() * 20 + 10; // Entre 10px y 30px
        const left = Math.random() * 100; // 0% a 100% de ancho de pantalla
        const duration = Math.random() * 6 + 6; // Entre 6s y 12s
        const opacity = Math.random() * 0.5 + 0.3; // Opacidad entre 0.3 y 0.8

        heart.style.fontSize = `${size}px`;
        heart.style.left = `${left}vw`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.opacity = opacity;

        // Color aleatorio acorde al tema: esmeralda, plata, amarillo
        const heartColors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-gold)'];
        const randomColor = heartColors[Math.floor(Math.random() * heartColors.length)];
        heart.style.color = randomColor;

        heartsContainer.appendChild(heart);

        // Remover después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    // Generar un corazón cada cierto tiempo
    setInterval(createHeart, 300);

    // --- 3. CONTADOR DE TIEMPO TRANSCURRIDO ---
    const contadorContainer = document.getElementById('contador');

    function actualizarContador() {
        const ahora = new Date();
        const diferenciaMs = ahora - fechaAniversario;

        if (diferenciaMs < 0) {
            contadorContainer.innerHTML = "<p>¡Esperando con ansias nuestro aniversario! ❤️</p>";
            return;
        }

        // Cálculos aproximados/exactos
        const totalSegundos = Math.floor(diferenciaMs / 1000);
        const totalMinutos = Math.floor(totalSegundos / 60);
        const totalHoras = Math.floor(totalMinutos / 60);
        const totalDias = Math.floor(totalHoras / 24);

        // Calcular años, meses sobrantes y días sobrantes
        let anios = ahora.getFullYear() - fechaAniversario.getFullYear();
        let meses = ahora.getMonth() - fechaAniversario.getMonth();
        let dias = ahora.getDate() - fechaAniversario.getDate();

        if (dias < 0) {
            // Ajustar mes y días si el día actual es anterior al día del aniversario en el mes
            meses--;
            // Obtener los días del mes anterior
            const ultimoDiaMesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
            dias += ultimoDiaMesAnterior;
        }

        if (meses < 0) {
            anios--;
            meses += 12;
        }

        const horasRestantes = totalHoras % 24;
        const minutosRestantes = totalMinutos % 60;
        const segundosRestantes = totalSegundos % 60;

        contadorContainer.innerHTML = `
            <div class="countdown-box">
                <span class="countdown-num">${anios}</span>
                <span class="countdown-label">${anios === 1 ? 'Año' : 'Años'}</span>
            </div>
            <div class="countdown-box">
                <span class="countdown-num">${meses}</span>
                <span class="countdown-label">${meses === 1 ? 'Mes' : 'Meses'}</span>
            </div>
            <div class="countdown-box">
                <span class="countdown-num">${dias}</span>
                <span class="countdown-label">${dias === 1 ? 'Día' : 'Días'}</span>
            </div>
            <div class="countdown-box">
                <span class="countdown-num">${String(horasRestantes).padStart(2, '0')}</span>
                <span class="countdown-label">Horas</span>
            </div>
            <div class="countdown-box">
                <span class="countdown-num">${String(minutosRestantes).padStart(2, '0')}</span>
                <span class="countdown-label">Min.</span>
            </div>
            <div class="countdown-box">
                <span class="countdown-num">${String(segundosRestantes).padStart(2, '0')}</span>
                <span class="countdown-label">Seg.</span>
            </div>
        `;
    }

    actualizarContador();
    setInterval(actualizarContador, 1000);

    // --- 4. CARTA INTERACTIVA (SOBRE) ---
    const envelope = document.getElementById('envelope');
    
    envelope.addEventListener('click', (e) => {
        // Prevenir que el scroll interno del texto cierre el sobre
        if (e.target.closest('.letter-text') && envelope.classList.contains('open')) {
            return;
        }
        envelope.classList.toggle('open');
    });

    // --- 5. GENERADOR DE RAZONES CON EFECTO MAQUINA DE ESCRIBIR ---
    const reasonBtn = document.getElementById('reasonBtn');
    const reasonText = document.getElementById('reasonText');
    let typingInterval = null;
    let ultimaRazonIdx = -1;

    function typewriterEffect(element, text) {
        clearInterval(typingInterval);
        element.textContent = '';
        let index = 0;

        typingInterval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 30); // Velocidad de escritura: 30ms por letra
    }

    reasonBtn.addEventListener('click', () => {
        let randomIdx;
        
        // Evitar que salga la misma razón consecutivamente
        do {
            randomIdx = Math.floor(Math.random() * razones.length);
        } while (randomIdx === ultimaRazonIdx && razones.length > 1);

        ultimaRazonIdx = randomIdx;
        const textoSeleccionado = razones[randomIdx];

        // Añadir efecto de pulso rápido al botón
        reasonBtn.style.transform = 'scale(0.95)';
        setTimeout(() => reasonBtn.style.transform = '', 100);

        typewriterEffect(reasonText, textoSeleccionado);
    });

    // --- 6. REVELACIÓN EN SCROLL (INTERSECTION OBSERVER) ---
    const sections = document.querySelectorAll('.reveal-section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% de la sección es visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting || entry.intersectionRatio > 0.15) {
                entry.target.classList.add('active');
                // Dejar de observar la sección una vez revelada (opcional, para performance)
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

function createStar() {
    const star = document.createElement('div');
    star.innerHTML = '✨';
    star.classList.add('star');
    document.body.appendChild(star);

    star.style.left = Math.random() * 100 + 'vw';

    setTimeout(() => star.remove(), 5000);
}

setInterval(createStar, 1500);

    // --- 7. GALERÍA DINÁMICA ---
    const galleryImagesPath = 'img';
    const galleryVideosPath = 'video';
    const galleryFiles = [
        'multimedia1.jpg','multimedia2.jpg','multimedia3.MP4','multimedia4.jpg','multimedia5.MP4','multimedia6.jpg','multimedia7.MP4','multimedia8.jpg','multimedia9.MP4','multimedia10.jpg','multimedia11.MP4','multimedia12.jpg','multimedia13.MP4','multimedia14.jpg','multimedia15.MP4','multimedia16.jpg','multimedia17.MP4','multimedia18.jpg','multimedia19.jpg','multimedia20.jpg','multimedia21.MP4','multimedia22.jpg','multimedia23.jpg','multimedia24.jpg','multimedia25.jpg','multimedia26.jpg','multimedia27.jpg','multimedia28.MP4','multimedia29.jpg','multimedia30.MP4'
    ];

    const gallery = document.querySelector('.gallery');
    if (gallery) {
        function resizeItem(item) {
            const rowHeight = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-auto-rows'));
            const rowGap = parseInt(window.getComputedStyle(gallery).getPropertyValue('gap'));
            const content = item.querySelector('.polaroid-img-wrapper');
            const contentHeight = content.getBoundingClientRect().height;
            const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
            item.style.gridRowEnd = `span ${rowSpan}`;
        }

        galleryFiles.forEach((file, idx) => {
            const polaroid = document.createElement('figure');
            polaroid.className = 'polaroid';

            const wrapper = document.createElement('div');
            wrapper.className = 'polaroid-img-wrapper';

            const lower = file.toLowerCase();
            const ext = lower.substring(lower.lastIndexOf('.'));
            const base = file.substring(0, file.lastIndexOf('.'));

            if (ext === '.mp4' || ext === '.webm') {
                const video = document.createElement('video');
                video.setAttribute('controls', '');
                video.setAttribute('preload', 'metadata');
                video.src = `${galleryVideosPath}/${file}`;
                const source = document.createElement('source');
                source.src = `${galleryVideosPath}/${file}`;
                source.type = `video/${ext.slice(1).toLowerCase()}`;
                video.appendChild(source);
                wrapper.appendChild(video);

                video.addEventListener('loadedmetadata', () => resizeItem(polaroid));
                video.addEventListener('loadeddata', () => resizeItem(polaroid));
            } else {
                const img = document.createElement('img');
                img.src = `${galleryImagesPath}/${file}`;
                img.alt = `Recuerdo ${idx + 1}`;
                img.loading = 'lazy';
                wrapper.appendChild(img);

                img.addEventListener('load', () => resizeItem(polaroid));
            }

            polaroid.appendChild(wrapper);
            gallery.appendChild(polaroid);
            resizeItem(polaroid);
        });

        window.addEventListener('resize', () => {
            document.querySelectorAll('.polaroid').forEach(resizeItem);
        });
    }
});
