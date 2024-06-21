<script>
    import { onMount } from 'svelte';

    function showParagraphs() {
        const paragraphs = document.querySelectorAll('.container p');
        paragraphs.forEach((p, index) => {
            setTimeout(() => {
                p.style.opacity = 1;
                p.style.transform = 'translateY(0)';
            }, index * 2000); // Ajusta el tiempo de aparición entre párrafos
        });
    }

    onMount(() => {
        showParagraphs();
    });
</script>

<style>
    .container {
        font-family: "Montserrat", sans-serif;
        line-height: 1.6;
        margin: 0 auto;
        background-color: #e6ebf1;
        color: #054f6d;
        text-align: justify;
        max-width: 1200px;
        padding: 20px;
    }

    

    p {
        font-family: "Montserrat", sans-serif;
        font-size: 1.2em;
        margin: 1% 5%;
        padding: 1% 5%;
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 2s ease-out, transform 1s ease-out;
    }
</style>

<div class="container">
    <p>
        Hola, soy Juan Felipe. Profesor universitario e investigador. También hago asesorías sobre temas de patrimonio cultural, ciencia y tecnología y propiedad intelectual en el contexto digital. He podido construir un perfil académico y profesional que se caracteriza por priorizar las preguntas y los problemas de investigación por encima de las fronteras disciplinares. Soy Doctor en Historia, Magíster en Filosofía y Abogado. Me intereso en la cultura visual, las humanidades digitales y la historia intelectual.  He investigado sobre la representación visual del conflicto armado y sobre las relaciones entre imágenes, espacio y poder en el siglo XIX. Tengo experiencia en diseño y ejecución de proyectos de investigación, en edición y curaduría documental y en desarrollo de proyectos de humanidades digitales y de historia pública. Tengo conocimientos en diseño web (HTML, javaScript, CSS), programación creativa (p5.js, lua, pure data) y visualización de datos (d3). 
    </p>
</div>
