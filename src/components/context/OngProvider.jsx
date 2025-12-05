import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useEffect, useState } from 'react'

export const OngContext = createContext()

export function OngProvider({ children }){

    const ONG_STORAGE_KEY = 'fokus-ongs'

    const [ongs, setOngs] = useState([])
    const [isLoad, setIsLoad] = useState(false)

    const [editingOng, setEditingOng] = useState(null)

    useEffect(() => {

        const getData = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem(ONG_STORAGE_KEY);
              const loadedData = jsonValue != null ? JSON.parse(jsonValue) : 
              [];
              setOngs(loadedData)
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
              await AsyncStorage.setItem(ONG_STORAGE_KEY, jsonValue);
            } catch (e) {
              // saving error
            }
          };
        if(isLoad){
            storeData(ongs)
        }
        
    }, [ongs])

    const addOngs = (ong) => {
        setOngs(oldState => {
            return [
                ...oldState,
                {
                    // espera um objeto { title, responsibleName, description, phone }
                    ...ong,
                    id: Date.now().toString(),
                }
            ]
        })

    }

    const deleteOng = (id) => {
        setOngs(oldState => oldState.filter(
            t => t.id !== id
        ))
    }

    const updateOng = (id, newData) => {
        setOngs(oldState =>
            oldState.map(t => {
                if(t.id == id){
                    return{...t, ...newData}
                }
                return t
            }))
    }

    const startEditOng = (ong) => setEditingOng(ong || null)
    const clearEditingOng = () => setEditingOng(null)
    const saveOng = (ong) => {
        if(ong?.id){
            updateOng(ong.id, ong)
        } else {
            addOngs(ong)
        }
        clearEditingOng()
    }

    return(
        <OngContext.Provider value={{ 
            ongs,
            addOngs,
            updateOng,
            deleteOng,
            editingOng,
            startEditOng,
            clearEditingOng,
            saveOng,
        }}>
            {children}
        </OngContext.Provider>
    )

}
