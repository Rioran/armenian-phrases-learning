const phrases_folder = "phrases/";
const phrases_files = [
    "00-случайное",
    "01-приветствия",
];
const div_main = document.getElementById("main");

let phrases;


function get_phrases_json(phrases_file) {
    return fetch(phrases_folder + phrases_file + '.json')
        .then((response) => response.json())
        .then((json) => {
            phrases = json
            console.log('From inside function: ' + phrases);
        });
}


function select_phrases_file(button) {
    let name = button.innerText;
    console.log(name);
}


function add_phrases_div(name) {
    let html = '';
    html += '<button type="button" class="phrase_choice_button" onclick="select_phrases_file(this);">'
    html +=  name + "</button>";
    div_main.innerHTML += html;
}


function entry_point() {
    phrases_files.forEach(add_phrases_div);
}

//await get_phrases_json(phrases_files[0])
