const HIGHLIGHT_COLOR = '#FFF999'
const TEXT_Y_OFFSET = 0

function sanitizeString(str){
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    return str.trim();
}

plot_guideline = function(result) { 
    console.log('starting')
    var data = jsyaml.load(result)
    console.log(data)

/*
    data['sections'].map((section_data, index) => {
        var section_id = write_section(section_data, index);

        for (let subsection_data of section_data['subsections']) {
            if ('hidden' in subsection_data.display) {
                if (subsection_data.display.hidden) {
                    continue
                }
            }
            
            var subsection_id = write_subsection(subsection_data, section_id)
            console.log(subsection_id)
        }
    })

    console.log('finished, and writing toc')
    $(function() {
        $("#toc").tocify({
            extendPage: false
        })
    });
*/

    plot_algorithm(data, "Melanoma")
}

plot_algorithm = function(data, algorithm_id) {
    console.log('plotting algorithm: ' + algorithm_id)
    algorithm_data = data['Algorithms'][algorithm_id]
    console.log(algorithm_data)

    
}
