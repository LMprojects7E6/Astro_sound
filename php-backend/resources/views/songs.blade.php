<h1> {{ $heading }} </h1>

@unless(count($songs) == 0)
    @foreach ($songs as $song)
        <h2>
            {{ $song['title'] }}
        </h2>
        <p>
            {{ $song['artist'] }}
        </p>
        <p>
            {{ $song['album'] }}
        </p>
    @endforeach

    @else
        <p>No songs found</p>
@endunless
