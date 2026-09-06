const contenido = document.getElementById("contenido");

const textos = {

inicio: `

<div class="hero">

    <img 
src="img/hero.png" alt="Acompañamiento educativo" class="hero-img">

    <h2 class="eslogan">
        Acompañando el descubrimiento de tu potencial
    </h2>

    <p>
        Cada aprendizaje tiene su propio camino.
        Mi labor como pedagoga consiste en acompañar,
        orientar y ofrecer herramientas que permitan a
        niños, adolescentes y familias desarrollar todo
        su potencial.
    </p>

</div>

`,

"sobre-mi": `

<div class="sobre-mi">


<img src="img/sobre-mi.png" alt="Icono" class="sobre-mi-img">

<p>
Soy Lourdes Alcalá, pedagoga y madre. Mi trayectoria profesional y mi experiencia personal me han permitido comprender que cada persona aprende de forma única y que detrás de cada proceso educativo existen fortalezas, necesidades, intereses y un enorme potencial por descubrir.
</p>
<p>
A lo largo de los años he acompañado a estudiantes y familias en diferentes etapas de su desarrollo, ofreciendo apoyo educativo, orientación y estrategias que favorezcan un aprendizaje más efectivo, motivador y adaptado a las características individuales de cada persona.
</p>
<p>
Mi experiencia como madre ha enriquecido profundamente mi mirada pedagógica. A través del acompañamiento diario de mis hijos he vivido de cerca los retos, las dudas y las inquietudes que forman parte del crecimiento y del aprendizaje. Esta vivencia me ha permitido unir mis conocimientos profesionales con una perspectiva más cercana, comprensiva y respetuosa de los ritmos de cada niño y niña.
</p>
<p>
Creo firmemente que la educación va mucho más allá de los resultados académicos. Aprender implica desarrollar confianza, autonomía, autoestima y la capacidad de reconocer las propias fortalezas. Por ello, mi forma de trabajar se basa en el acompañamiento, la escucha activa y la creación de entornos seguros que favorezcan el crecimiento personal y educativo.
</p>
<p>
Además del refuerzo educativo y la orientación pedagógica, me interesan especialmente los procesos relacionados con las dificultades de aprendizaje, las técnicas de estudio, la motivación, la organización personal y el apoyo a las familias en su importante labor educativa.
</p>
<p>
Mi objetivo es ofrecer un acompañamiento cercano y personalizado, ayudando a cada estudiante y a cada familia a comprender mejor su propio proceso de aprendizaje y a descubrir los recursos necesarios para avanzar con confianza.
</p>
<p>
Porque cada persona tiene su propio camino y, en ocasiones, lo más importante no es marcar la dirección, sino acompañar el recorrido.
</p>
<p>
🌳 Mi filosofía: <strong> Acompañando el descubrimiento de tu potencial.<strong>
</p>

</div>
`,

servicios: `

<img src="img/servicios.png" alt="Acompañamiento educativo" class="servivios-img">


<div class="servicios-grid">

    <div class="servicio">
        <h3> Refuerzo Educativo</h3>
        <p>El refuerzo educativo está dirigido a estudiantes que necesitan apoyo para consolidar aprendizajes, mejorar su rendimiento académico o recuperar la confianza en sus propias capacidades.
</p>

<p> Las sesiones se adaptan a las necesidades de cada alumno o alumna, respetando su ritmo de aprendizaje y potenciando sus fortalezas. El objetivo no es únicamente mejorar los resultados escolares, sino ayudar a desarrollar hábitos de trabajo, autonomía y seguridad en el proceso de aprendizaje.
</p>

<p> 
Cada intervención se planifica de forma individualizada, buscando que el estudiante comprenda mejor los contenidos, afiance conocimientos y se sienta capaz de afrontar nuevos retos con confianza..</p>
    </div>


    <div class="servicio">
        <h3> Técnicas de Estudio</h3>
        <p>Las técnicas de estudio están dirigidas a estudiantes que presentan dificultades para organizarse, concentrarse o afrontar las tareas escolares de forma autónoma.
</p>

<p> 
En muchas ocasiones el problema no está en la capacidad del estudiante, sino en la ausencia de estrategias adecuadas para aprender. Durante las sesiones se trabajan herramientas de planificación, organización, comprensión lectora, elaboración de esquemas, resúmenes, gestión del tiempo y preparación de exámenes.
</p>

<p> 
El objetivo no es solo estudiar más, sino aprender a estudiar mejor, favoreciendo la autonomía, la motivación y la confianza en el propio aprendizaje.</p>
    </div>

    <div class="servicio">
        <h3> Dificultades de Aprendizaje</h3>
        <p>Cada estudiante aprende de una manera diferente. Cuando aparecen dificultades específicas, es importante comprender su origen y ofrecer los apoyos adecuados.
</p>

<p> 
Este servicio está orientado a alumnado que presenta dificultades relacionadas con la lectura, la escritura, la comprensión, la atención o el aprendizaje escolar. Se trabajan aspectos vinculados a la dislexia, dificultades de lectoescritura, comprensión lectora, organización del aprendizaje y otras necesidades educativas.
</p>

<p> 
La intervención se centra en potenciar las capacidades del estudiante, proporcionándole estrategias, recursos y herramientas adaptadas a sus necesidades..</p>
    </div>

    <div class="servicio">
        <h3> Orientación Familiar</h3>
        <p>La familia desempeña un papel fundamental en cualquier proceso educativo.
</p>

<p>
Este servicio ofrece un espacio de escucha, orientación y acompañamiento para madres, padres y cuidadores que desean comprender mejor las necesidades de sus hijos e hijas y adquirir herramientas para afrontar los retos cotidianos relacionados con la educación y el aprendizaje.
</p>

<p>Algunos temas que pueden abordarse son:</p>

<ul class="lista-servicios">

    <li>Hábitos y rutinas.</li>

    <li>Organización del estudio.</li>

    <li>Gestión emocional.</li>

    <li>Límites y normas.</li>

    <li>Dificultades de aprendizaje.</li>

    <li>Motivación académica.</li>

    <li>Relación familia-escuela.</li>

    <li>Acompañamiento educativo en casa.</li>

</ul>

<p>
El objetivo es ofrecer apoyo práctico y personalizado que permita a las familias sentirse más seguras y acompañadas.</p>
    </div>

<div class="servicio">
        <h3> Altas Capacidades y Talento</h3>
<p>
Las altas capacidades no implican únicamente un alto rendimiento académico. Con frecuencia estos estudiantes presentan necesidades educativas, emocionales y motivacionales específicas que requieren comprensión y acompañamiento.
</p>

<p>
Este servicio está dirigido a niños, niñas y adolescentes con altas capacidades, talento específico o sospecha de un potencial elevado.
</p>

<p>Se trabaja en aspectos como:</p>

<ul class="lista-servicios">

    <li>Motivación y disfrute del aprendizaje.</li>

    <li>Desarrollo del talento y fortalezas personales.</li>

    <li>Organización y hábitos de estudio.</li>

    <li>Gestión emocional.</li>

    <li>Creatividad y pensamiento divergente.</li>

    <li>Prevención de la desmotivación escolar.</li>

    <li>Acompañamiento familiar.</li>

</ul>

<p>
El objetivo es ayudar a que cada estudiante pueda desarrollar sus capacidades de forma equilibrada, respetando su individualidad y favoreciendo su bienestar personal y académico.
</p>

</div>

<div class="servicio">
        <h3>Acompañamiento Educativo Online </h3>
<p>
La modalidad online permite ofrecer apoyo pedagógico personalizado de una forma flexible, cómoda y accesible, independientemente del lugar de residencia.
</p>

<p>
Las sesiones se desarrollan en un entorno dinámico e interactivo, adaptado a las necesidades de cada estudiante, utilizando recursos digitales que favorecen la participación, la motivación y el aprendizaje.
</p>
<p>Este servicio está dirigido a alumnado que necesita:</p>

<ul class="lista-servicios">

    <li>Refuerzo educativo.</li>

    <li>Técnicas de estudio.</li>

    <li>Apoyo en dificultades de aprendizaje.</li>

    <li>Altas capacidades y enriquecimiento educativo.</li>

    <li>Organización y planificación académica.</li>

    <li>Acompañamiento pedagógico individualizado.</li>

</ul>

<p>
Las sesiones se adaptan a los objetivos de cada estudiante, manteniendo siempre una atención cercana y personalizada. El objetivo es que el alumnado adquiera herramientas que le permitan avanzar con mayor autonomía, confianza y seguridad en su aprendizaje.
</p>

<p>
La distancia no es un obstáculo cuando existe un acompañamiento adecuado.
</p>

</div>
</div>
`,

recursos: `



`,

contacto: `

<h2>Contacto</h2>

<p>
Si deseas más información o concertar una sesión, estaré encantada de ayudarte.
</p>

<div class="datos-contacto">

    <p><strong>📞 Teléfono:</strong> 657 54 85 19</p>

    <p>
        <strong>📧 Correo:</strong>
        lourdes_alcala_duran@yahoo.es
    </p>

    <p>
        <strong>💬 WhatsApp:</strong>
        657 54 85 19
    </p>

</div>

<form class="formulario-contacto">

    <input
        type="text"
        placeholder="Nombre y apellidos"
        required>

    <input
        type="email"
        placeholder="Correo electrónico"
        required>

    <input
        type="tel"
        placeholder="Teléfono">

    <textarea
        rows="6"
        placeholder="Cuéntame cómo puedo ayudarte..."
        required></textarea>

    <button type="submit">
        Enviar consulta
    </button>

</form>

`
};

contenido.innerHTML = textos.inicio;

document.querySelectorAll(".tab").forEach(tab => {

    tab.addEventListener("click", () => {

        document.querySelectorAll(".tab")
        .forEach(btn => btn.classList.remove("active"));

        tab.classList.add("active");

        contenido.innerHTML = textos[tab.dataset.tab];

    });

});
