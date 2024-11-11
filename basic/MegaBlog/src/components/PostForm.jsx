import React, { useEffect, useCallback } from 'react'
import Input from './Input';
import Button from './Button';
import { useForm } from 'react-hook-form';
import service from '../appwrite/config';
import { useSelector } from 'react-redux';

function PostForm() {
    const userData = useSelector(state => state.auth.userData)

    const { register, handleSubmit, watch, setValue } = useForm()
    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string')
            return value
                .trim()
                .toLocaleLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, '-');

        return ''

    }, [])
    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, { shouldValidate: true }))
            }
        })

        return () => {
            subscription.unsubscribe()
        }

    }, [watch, slugTransform, setValue])


    const submit = async (data) => {
        const file = await service.uploadFile(data.image[0])
        if (file) {
            const fileId = file.$id
            data.featuredImage = fileId
            const dbPost = await service.createPost({
                ...data,
                userId: userData.$id,
            })
        }
    }

    return (
        <form className="postForm" onSubmit={handleSubmit(submit)}>
            <div className="left">
                <Input
                    type='text'
                    label={'Title'}
                    {...register('title')}
                />
                <Input
                    type="text"
                    label={'Slug'}
                    {...register('slug')}
                />
                <div className="rte">
                    <p>content</p>
                    <textarea name="" id="" {...register('content')}></textarea>
                </div>
            </div>
            <div className="right">
                <Input
                    label={'Featured Image'}
                    type='file'
                    {...register('image')}
                />
                <select name="" id="" {...register('status')}>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                </select>
                <Button children={'Submit'} type={"submit"} />
            </div>
        </form>
    )
}

export default PostForm
