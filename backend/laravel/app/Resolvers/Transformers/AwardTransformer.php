<?php

namespace App\Resolvers\Transformers;

class AwardTransformer extends Transformer
{
    protected $resourceName = 'award';

    public function transform($data)
    //data es la subscripcion pasada, indicamos los campos que queremos que nos retorne
    {
        return [
            'id'                => $data['id'],
            'name'              => $data['name'],
            'description'       => $data['description'],
            'image'             => $data['image'],
            'created_at'        => $data['created_at'],
        ];
    }
}