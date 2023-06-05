import { INews, IJinx } from '../model'
import { v4 } from 'uuid'

export const newsTitels: INews[]  = [
    {
        id: v4(),
        title: 'Видео'
    }, 
    {
        id: v4(),
        title: 'Картинки'
    }, 
    {
        id: v4(),
        title: 'Новости'
    }, 
    {
        id: v4(),
        title: 'Карты'
    }, 
    {
        id: v4(),
        title: 'Еще'
    }];

export const Jinx: IJinx[] = [
    {
        id: v4(),
        jinx: 'JINX'
    },
    {
        id: v4(),
        jinx: 'JINX'
    },
    {
        id: v4(),
        jinx: 'JINX'
    },
    {
        id: v4(),
        jinx: 'JINX'
    },
    {
        id: v4(),
        jinx: 'JINX'
    }
]