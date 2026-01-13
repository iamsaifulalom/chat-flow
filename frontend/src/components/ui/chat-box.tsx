import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupTextarea
} from './input-group';
import { ArrowUp, Plus } from 'lucide-react';

export default function ChatBox() {
    return (
        <InputGroup className='max-h-52'>
            <InputGroupTextarea
                placeholder='Lets chat with me.'
            />
            <InputGroupAddon align="block-end" className='flex justify-between'>
                <InputGroupButton className="rounded-full" variant="secondary" size="icon-sm">
                    <Plus />
                    <span className="sr-only">Add files</span>
                </InputGroupButton>
                <InputGroupButton className="rounded-full" variant="default" size="icon-sm">
                    <ArrowUp />
                    <span className="sr-only">Send</span>
                </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    )
}
