@props([
    'question',
    'inputName',
    'answers',
])
<div class="component-enquete-qa_radio">
    <p>{{ $question }}</p>
    <ul>
    @foreach($answers as $val => $answer)
        <li>
            <label>
                {{ html()->radio()->name($inputName)->value($val) }}
                {{ $answer }}
            </label>
        </li>
    @endforeach
    </ul>
</div>
