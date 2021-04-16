import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as Confirm from "@pnotify/confirm";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

export default function click() {
    error({
        title: false,
        text:
            "Too many matches found. Please enter a more specific query!",
        maxTextHeight: null,
        modules: new Map([
            [
                Confirm,
                {
                    confirm: false,
                    buttons: [
                        {
                            text: "Ok",
                            primary: true,
                            click: notice => {
                                notice.close();
                            }
                        }
                    ]
                }
            ]
        ])
    });
}