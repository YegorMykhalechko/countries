import { alert } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as Confirm from "@pnotify/confirm";
import "@pnotify/confirm/dist/PNotifyConfirm.css";



export default function warningNotice() {
    alert({
        title: false,
        text:
            "Please",
        maxTextHeight: null,
        delay: 2000,
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