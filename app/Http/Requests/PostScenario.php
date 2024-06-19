<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostScenario extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {
        return [
            'title' => 'required_with:is_open',
            'rule_x2_id' => 'different:rule_x1_id',
            'special_rule' => 'nullable|string|max:200',
            'scenario_chara.*.character_id' => 'distinct',
            'feature' => 'required_with:is_open',
            'advice' => 'required_with:is_open',
        ];
    }

    public function messages() {
        return [
            'scenario_chara.*.character_id.distinct' => __(':attributeに重複があります。'),
            'title.required_with' => __('公開する場合は:attributeを設定してください。'),
            'feature.required_with' => __('公開する場合は:attributeを設定してください。'),
            'advice.required_with' => __('公開する場合は:attributeを設定してください。'),
        ];
    }

    public function attributes() {
        return [
            'title' => __('脚本タイトル'),
            'special_rule' => __('特殊ルール'),
            'scenario_chara.*.character_id' => __('登場人物'),
            'feature' => __('脚本の特徴'),
            'advice' => __('脚本家への指針'),
        ];
    }
}
