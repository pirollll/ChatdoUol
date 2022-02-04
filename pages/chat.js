import { Box, Text, TextField, Image } from '@skynexui/components'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import appConfig from '../config.json'

export default function ChatPage() {
    const [mensagem, setMensagem] = useState('')
    const [lista, setLista] = useState([])
    const textAreaMsg = React.createRef()

    function handleNovaMensagem(novaMsg) {
        if (novaMsg.length < 1) {
            return false
        }
        const mensagem = {
            id: lista.length + 1,
            from: 'pirollll',
            texto: novaMsg
        }
        setLista([mensagem, ...lista])
        setMensagem('')
    }

    function handleTextAreaMsg() {
        handleNovaMensagem(mensagem)
        console.log(textAreaMsg.current.focus())
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/07/futuristic-office-1536x864.jpg)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={lista} />

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <input type='textarea' 
                            ref={textAreaMsg} 
                            value={mensagem}
                            onChange={(e) => {
                                const valor = e.target.value
                                setMensagem(valor)
                            }}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault()
                                    handleNovaMensagem(mensagem)
                                }
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            style={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                                height: '30px'
                            }}
                        />
                        <Button variant="contained"
                            onClick={()=>handleTextAreaMsg()}
                            style={{
                                padding: '10px 20px',
                                border: '20px',
                                borderRadius: '5px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}                                                
                        >Enviar</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='contained'
                    href="/"
                    style={{
                        padding: '6px 20px',
                        border: '20px',
                        borderRadius: '5px',
                        backgroundColor: appConfig.theme.colors.neutrals[800],
                        marginRight: '12px',
                        color: appConfig.theme.colors.neutrals[200]
                    }}   
                >Logout</Button>
            </Box>
        </>
    )
}

function MessageList(props) {
    //const mensagem = props.mensagens
    //console.log(props.mensagens)
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
                return (

                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${mensagem.from}.png`}
                            />
                            <Text tag="strong">
                                {mensagem.from}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </Box>
                        {mensagem.texto}
                    </Text>

                )
            }

            )}
        </Box>
    )
}