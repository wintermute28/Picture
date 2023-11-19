import { postData } from "../services/requests";

const drop = () => {

    //drag *
    //dragend *
    //dragenter - объект над dropArea
    //dragexid *
    //dragleave - объект запределами dropArea
    //dragover - объект зависает над dropArea
    //dragstart *
    //drop - пользователь опустил объект над dropArea

    const fileInputs = document.querySelectorAll("[name='upload']");

    ["dragenter", "dragleave", "dragover", "drop"].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highLight(item) {
        item.closest(".file_upload").style.border = "3px solid #c51abb";
        item.closest(".file_upload").style.borderRadius = "50px";
        item.closest(".file_upload").style.backgroundColor = "rgba(0,0,0, .4)";
    }

    function unhighLight(item) {
        item.closest(".file_upload").style.border = "none";
        item.closest('.file_upload').style.backgroundColor = "inherit";
        // if (item.closest(".calc_form")) {
        //     item.closest(".file_upload").style.backgroundColor = "#fff";
        // } else {
        //     item.closest(".file_upload").style.backgroundColor = "#ededed";
        // }
        
    }

    ["dragenter", "dragover"].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highLight(input), false);
        });
    });

    ["dragleave", "drop"].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighLight(input), false);
        });
    });

    const clearInputs = () => {
        fileInputs.forEach(item => {
            item.value = ""
        });

        upload.forEach(item => {
            item.previousElementSibling.textContent = "Файл не выбран";
        })
    }

    fileInputs.forEach(input => {
        input.addEventListener("drop", (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const arr = input.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;

            // Отправка файла сразу после дропа на главной станице
            if (input.closest(".main")) {
                const formData = new FormData;
                formData.append("file", input.files[0]);

                postData("assets/server.php", formData)
                .then(result => {
                    console.log(result);
                })
                .catch(() => {
                    console.log("Error");
                })
                .finally(() => {
                    clearInputs();
                });
            }
        });
    });

};

export default drop;