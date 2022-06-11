<?php

namespace App\Domain\Category\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;
use Spatie\Translatable\HasTranslations;

class Category extends Model
{
    use HasFactory, HasTranslations, SoftDeletes;

    protected $fillable = ['title', 'slug', 'parent_id'];
    public $translatable = ['title', 'slug'];

    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    /**
     * Dump all the parent's children recursively
     *
     * @return void
     */
    public function childrenRecursive()
    {
        return $this->children()->with('childrenRecursive');
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = json_encode([app()->getLocale() => Str::slug($value, '-')]);
    }
}
