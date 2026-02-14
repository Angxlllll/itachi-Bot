nativeFlowMessage: {
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "Select Menu",
                                    sections: [
                                        {
                                            title: "SHADOW-BOT MD",
                                            highlight_label: "POPULAR",
                                            rows: [
                                                { header: "Menú", title: "Menú Completo", description: "Ver todos los comandos", id: `${usedPrefix}allmenu` },
                                                { header: "Info", title: "Estado del Bot", description: "Ver estado y velocidad", id: `${usedPrefix}ping` },
                                                { header: "Owner", title: "Creador", description: "Contacto del creador", id: `${usedPrefix}owner` },
                                                { header: "Auto", title: "Registro", description: "Registro automático", id: `${usedPrefix}reg` }
                                            ]
                                        }
                                    ]
                                })
                            },
                            {
                                name: "cta_copy",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Copiar Código",
                                    id: "123456789",
                                    copy_code: "SHADOW BOT MD - SCRIPT"
                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Canal de WhatsApp",
                                    url: "https://whatsapp.com/channel/0029VbArz9fAO7RGy2915k3O",
                                    merchant_url: "https://whatsapp.com/channel/0029VbArz9fAO7RGy2915k3O"
                                })
                            },
                            {
                                name: "galaxy_message",
                                buttonParamsJson: JSON.stringify({
                                    mode: "published",
                                    flow_message_version: "3",
                                    flow_token: "1:1307913409923914:293680f87029f5a13d1ec5e35e718af3",
                                    flow_id: "1307913409923914",
                                    flow_cta: "ACCEDE A BOT AI",
                                    flow_action: "navigate",
                                    flow_action_payload: {
                                        screen: "QUESTION_ONE",
                                        params: { user_id: "123456789", referral: "campaign_xyz" }
                                    },
                                    flow_metadata: {
                                        flow_json_version: "201",
                                        data_api_protocol: "v2",
                                        flow_name: "Lead Qualification [en]",
                                        data_api_version: "v2",
                                        categories: ["Lead Generation", "Sales"]
                                    }
                                })
                            }
                        ],
                        messageParamsJson: JSON.stringify({
                            limited_time_offer: {
                                text: "꩜ 𝗠𝗲𝗻𝘂 𝗟𝗶𝘀𝘁",
                                url: "https://whatsapp.com/channel/0029VbArz9fAO7RGy2915k3O",
                                copy_code: "SHADOW-BOT-MD",
                                expiration_time: 1754613436864329
                            },
                            bottom_sheet: {
                                in_thread_buttons_limit: 2,
                                divider_indices: [1, 2, 3],
                                list_title: "Select Menu",
                                button_title: "⊱✿ ᴍᴇɴᴜ ʟɪsᴛ ✿⊰"
                            },
                            tap_target_configuration: {
                                title: "▸ SHADOW ◂",
                                description: "Menú Principal",
                                canonical_url: "https://whatsapp.com/channel/0029VbArz9fAO7RGy2915k3O",
                                domain: "https://whatsapp.com",
                                button_index: 0
                            }
                        })
                    },
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: