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
            'rule_x2_id' => 'different:rule_x1_id',
            'scenario_chara.*.character_id' => 'distinct',
        ];
    }

    public function messages() {
        return [
            'scenario_chara.*.character_id.distinct' => __(':attributeに重複があります。'),
        ];
    }

    public function attributes() {
        return [
            'scenario_chara.*.character_id' => __('登場人物'),
        ];
    }
}
