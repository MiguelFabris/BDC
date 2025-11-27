import { useContext } from 'react';
import { DonationContext } from './DonationProvider';

export default function useDonationContext() {
    const context = useContext(DonationContext);

    if(!context){
        throw new Error('Tentando acessar o contexto fora do DonationProvider');
    }

    return context
}