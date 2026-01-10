import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupTextarea
} from './input-group';
import { ArrowUp } from 'lucide-react';

export default function ChatBox() {
    return (
        <InputGroup className='max-h-52'>
            <InputGroupTextarea
                placeholder='Lets chat with me.'
            />
            <InputGroupAddon align="block-end" className='flex justify-end'>
                <InputGroupButton className="rounded-full" variant="default" size="icon-xs">
                    <ArrowUp />
                    <span className="sr-only">Send</span>
                </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    )
}
