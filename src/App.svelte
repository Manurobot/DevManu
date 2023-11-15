<!-- <script>
  import { onMount } from "svelte";

  let cv = {
    name: "Tu nombre",
    title: "Tu título",
    email: "tucorreo@email.com",
    phone: "tutelefono",
    linkedin: "tulinkedin",
    github: "tugithub",
    skills: ["tus habilidades"],
    experience: [
      {
        company: "Nombre de la empresa",
        position: "Cargo",
        start: "Fecha de inicio",
        end: "Fecha de finalización",
        description: "Descripción de tu experiencia",
      },
    ],
    education: [
      {
        institution: "Nombre de la institución",
        degree: "Título",
        start: "Fecha de inicio",
        end: "Fecha de finalización",
      },
    ],
  };

  onMount(() => {
    // Aquí puedes agregar código JavaScript para inicializar tu aplicación
  });
</script>


<div class="cv">
  <div class="header">
    <h1>{ cv.name }</h1>
    <h2>{ cv.title }</h2>
    <h3>{ cv.email }</h3>
    <h3>{ cv.phone }</h3>
    <h3>{ cv.linkedin }</h3>
    <h3>{ cv.github }</h3>
  </div>

  <div class="skills">
    <h2>Skills</h2>
    <ul>
      {#each cv.skills as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>

  <div class="experience">
    <h2>Experience</h2>
    <ul>
      {#each cv.experience as experience}
        <li>
          <h4>{ experience.company } - { experience.position }</h4>
          <h5>{ experience.start } - { experience.end }</h5>
          <p>{ experience.description }</p>
        </li>
      {/each}
    </ul>
  </div>

  <div class="education">
    <h2>Education</h2>
    <ul>
      {#each cv.education as education}
        <li>
          <h4>{ education.institution }</h4>
          <h5>{ education.degree }</h5>
          <h5>{ education.start } - { education.end }</h5>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .cv {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header {
  margin-bottom: 1rem;
}

.skills {
  margin-bottom: 2rem;
}

.experience {
  margin-bottom: 2rem;
}

.education {
  margin-bottom: 2rem;
}


</style> -->


<script>
  import Main from "./layouts/Main.svelte";
  import Counter from "./lib/Counter.svelte";


  let contar 


</script>


<Counter/>
<Main/>