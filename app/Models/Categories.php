<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $guarded = ['id'];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function parent()
    {
        return $this->belongsTo(Categories::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Categories::class, 'parent_id');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
