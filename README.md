# A simple & lightweight method of displaying modal windows with React.

dentibiotics_modal is a quite simple modal, with a content box and a button.
By default the modal window is screen's centered horizontaly and verticaly.
It's really easy to customize it with all sorts of props.

## Installation

You can install dentibiotics_modal with npm:

`npm install dentibiotics_modal`

## How to

You can customize :

<Modal 
    backgroundAction={}
    modalStyle={}
    content={}
    contentStyle={}
    buttonStyle={}
    buttonAction={}
/>

### background eventListener :

You can add an action on the background if needed with a props : 
backgroundAction={your props}

### modal screen style :

It's directly connected to className of the modal div.
I was working with [tailwindcss](https://tailwindcss.com/)  so I use this props for exemple :
modalStyle={'p-9 border-4 flex flex-col justify-center items-center border-green-900 border-opacity-70 bg-white rounded overflow-hidden bg-scroll'}

### modal window content :

You can customize the modal content with this props :
content={modalContent}

### modal content style :

And the content style (it's linked to the className of content div).
contentStyle={'m-5'}

### button style :

The button is totally customizable with this className's props :
buttonStyle={'w-24 p-2 opacity-80 hover:opacity-100 rounded px-5 bg-green-900 text-white'}

### button eventListener :

And finally the button action
buttonAction={}

To show or hide your modal window i can recommand this method. Adding in your parent component this :
`const [modal, setModal] = useState(false);
const [modalContent, setModalContent] = useState('');
const handleClick = () => {
        setModal(false);
    };`

And to hide your modal on background or button click :
`{modal && (
                <Modal
                    backgroundAction={handleClick}
                    modalStyle={custom-modal-style}
                    content={modalContent}
                    contentStyle={custom-content-style}
                    buttonStyle={custom-button-style}
                    buttonAction={handleClick}
                />
            )}`