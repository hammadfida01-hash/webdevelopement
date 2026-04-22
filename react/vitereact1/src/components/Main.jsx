import '../css/main.css'
function Section1() {

    return (
        <div id="section1">
 <h1>Heading 1 Main </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, autem provident. Accusantium quisquam nulla excepturi omnis voluptate, tempora illo consectetur. Incidunt tempore reiciendis repudiandae omnis dolorem cumque nemo? Nesciunt, esse.
        This is the main content of the website.</p>
            </div>
        );
       
    }

    function Section2() {

    return (
        <div id="section2">
 <h1>Heading 2 Main </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, autem provident. Accusantium quisquam nulla excepturi omnis voluptate, tempora illo consectetur. Incidunt tempore reiciendis repudiandae omnis dolorem cumque nemo? Nesciunt, esse.
        This is the main content of the website.</p>
            </div>
        );
       
    }


    function Section3() {

    return (
        <div id="section3">
 <h1>Heading 3 Main </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, autem provident. Accusantium quisquam nulla excepturi omnis voluptate, tempora illo consectetur. Incidunt tempore reiciendis repudiandae omnis dolorem cumque nemo? Nesciunt, esse.
        This is the main content of the website.</p>
            </div>
        );
       
    }

function Main() {
  return (
    <main>
        <Section1 />
        <Section2 />
        <Section3 />

    </main>
  );
} 
export default Main;
export {Section1,Section2};