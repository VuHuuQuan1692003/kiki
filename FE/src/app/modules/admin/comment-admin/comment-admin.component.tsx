import React, { Fragment, useEffect, useState } from 'react'
import { deleteComment, getAllComment, updateComment } from './service/comment-admi.service'
import TemplateTable from '../common/template-table/template-table.component'
import { Form, Input, Rate, Select } from 'antd'
import { getAllProduct } from '../product/service/product.service'
import { getAllUser } from '../user/service/user.service'
import { createComment} from '~/app/api/comment/comment.api'

const Option = Select
const CommentAdminComponent = () => {
    
    const [dataComment, setDataComment] = useState([])
    const [colums, setColums] = useState([])
    const [reset, setReset] = useState<boolean>(true)
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
        getAllComment().then((res) => {
            setDataComment(res.data)
        })
        getAllProduct().then((res) => {
            setProducts(res.data)
        })
        getAllUser().then((res) => {
            setUsers(res.data)
        })
    }, [reset])
    useEffect(() => {
        const columnTemp: any = [];
        if (dataComment.length > 0) {
            Object.keys(dataComment[0]).forEach((itemKey) => {
                if (!['_id', 'updatedAt', 'createdAt', '__v'].includes(itemKey)) {
                    columnTemp.push({
                        title: itemKey,
                        dataIndex: itemKey,
                        key: itemKey,
                        render: (text: any, record: any, index: any) => {
                            // if (itemKey === 'user') {
                            //     return record?.user?.email;
                            // }
                            // if (itemKey === 'product') {
                            //     return record?.product?.name;
                            // }
                            if(itemKey === 'star'){
                               return <Rate disabled  value={record?.star} />
                            }
                            return text;
                        },
                    });
                }
            });
        }
        setColums(columnTemp);
    }, [dataComment]);

    const handelGetList = () => {
        setReset(!reset)
    }

    return (
        <div>
            <div>
                <TemplateTable columnTable={colums} dataTable={dataComment} changeFunc={updateComment}  createFunc={createComment} dataPage={7} deleteFunc={deleteComment} handelGetList={handelGetList} formEdit={
                    <Fragment>
                    <Form.Item
                        label='userId'
                        name='userId'
                        rules={[{ required: true, message: 'Please input your fullname!' }]}
                    >
                        <Select placeholder="lựa chọn tài khoản">
                            {users.map((item: any) => (
                                <Option value={item._id} key={item._id}>{item.email}</Option>
                            ))}

                        </Select>
                    </Form.Item>
                    <Form.Item
                        label='productId'
                        name='productId'
                        rules={[{ required: true, message: 'Please input your fullname!' }]}
                    >
                        <Select placeholder="lựa chọn sản phẩm">
                            {products.map((item: any) => (
                                <Option value={item._id} key={item._id}>{item.name}</Option>
                            ))}

                        </Select>
                    </Form.Item>
                    <Form.Item
                        label='comment'
                        name='comment'
                        rules={[{ required: true, message: 'Please input your fullname!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='star'
                        name='star'
                        rules={[{ required: true, message: 'Please input your fullname!' }]}
                    >
                        <Rate />
                    </Form.Item>
                </Fragment>
                } />
            </div>
        </div>
    )
}

export default CommentAdminComponent