import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useEffect, useState } from 'react'

export const DonationContext = createContext()

export function DonationProvider({ children }){

    const DONATION_STORAGE_KEY = 'fokus-tasks'

    const [donations, setDonations] = useState([])
    const [isLoad, setIsLoad] = useState(false)
    const [editingDonation, setEditingDonation] = useState(null)

    useEffect(() => {

        const getData = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem(DONATION_STORAGE_KEY);
              const loadedData = jsonValue != null ? JSON.parse(jsonValue) : 
              [];
              setDonations(loadedData)
              setIsLoad(true)
            } catch (e) {
              // error reading value
            }
            };
            getData();
    }, [])

    useEffect(() => {
        const storeData = async (value) => {
            try {
              const jsonValue = JSON.stringify(value);
              await AsyncStorage.setItem(DONATION_STORAGE_KEY, jsonValue);
            } catch (e) {
              // saving error
            }
          };
        if(isLoad){
            storeData(donations)
        }
        
    }, [donations])

    const addDonations = (donation) => {
        setDonations(oldState => {
            return [
                ...oldState,
                {
                    // espera um objeto { title, donorName, description, phone }
                    ...donation,
                    id: Date.now().toString(),
                }
            ]
        })

    }

    const deleteDonation = (id) => {
        setDonations(oldState => oldState.filter(
            t => t.id !== id
        ))
    }

    const updateDonation = (id, newData) => {
        setDonations(oldState =>
            oldState.map(t => {
                if(t.id == id){
                    return{...t, ...newData}
                }
                return t
            }))
    }

    const startEditDonation = (donation) => {
        setEditingDonation(donation || null)
    }

    const clearEditingDonation = () => setEditingDonation(null)

    const saveDonation = (donation) => {
        if(donation?.id){
            updateDonation(donation.id, donation)
        } else {
            addDonations(donation)
        }
        clearEditingDonation()
    }

    return(
        <DonationContext.Provider value={{ 
            donations,
            addDonations,
            updateDonation,
            deleteDonation,
            editingDonation,
            startEditDonation,
            clearEditingDonation,
            saveDonation,
        }}>
            {children}
        </DonationContext.Provider>
    )

}