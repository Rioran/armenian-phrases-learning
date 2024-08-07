const phrases_folder = "phrases/";
const phrases_files = [
    //"00-случайное",  // debug purposes
    "01-приветствия",
    "02-местоимения",
    "03-обо-мне",
    "04-исключения-множественного-числа",
    "05-слова-от-начинать-до-поскольку",
];
const div_main = document.getElementById("main");

let phrases;
let phrases_index = 0;


function get_phrases_json(phrases_file) {
    const request = new XMLHttpRequest();
    request.open("GET", phrases_folder + phrases_file + '.json', false);
    request.send(null);
    return JSON.parse(request.responseText);
}


function reveal_full_phrase() {
    let phrase = phrases[phrases_index];
    let html = '';

    html += '<div class="phrase_russian_div" onclick="show_phrase_riddle();">' + phrase['russian'] + '</div>';
    html += '<div class="phrase_russian_hint_div" onclick="show_phrase_riddle();">' + phrase['russian_hint'] + '</div>';
    html += '<div class="phrase_transcript_div" onclick="show_phrase_riddle();">' + phrase['transcription'] + '</div>';
    html += '<div class="phrase_armenian_div" onclick="show_phrase_riddle();">' + phrase['armenian'] + '</div>';
    div_main.innerHTML = html;
    phrases_index += 1;
}


function show_phrase_riddle() {
    if (phrases_index == phrases.length) {
        location.reload();
    }

    let phrase = phrases[phrases_index];
    let html = '';

    html += '<div class="phrase_russian_div" onclick="reveal_full_phrase();">' + phrase['russian'] + '</div>';
    html += '<div class="phrase_russian_hint_div" onclick="reveal_full_phrase();">' + phrase['russian_hint'] + '</div>';
    html += '<div class="phrase_hidden_div" onclick="reveal_full_phrase();">(нажми чтобы открыть)</div>';
    html += '<div class="phrase_hidden_div" onclick="reveal_full_phrase();"></div>';
    div_main.innerHTML = html;
}


function select_phrases_file(button) {
    let html = '';
    let name = button.innerText;
    phrases = get_phrases_json(name);
    show_phrase_riddle();
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
