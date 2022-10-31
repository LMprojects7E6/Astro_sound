<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

use App\Models\Songs;
use Illuminate\Http\Request;

class phpSongsController extends Controller
{

	//select distinct genre from songs
	public function getGenres()
	{
		$genres = DB::table('songs')
			->select('genre')
			->distinct()
			->get();
		return response()->json(['status' => 200, 'genres' => $genres]);
	}

	//select genre, count(1) as songs from songs group by genre;
	public function getGenresCount()
	{
		$genresCount = DB::table('songs')
			->select(DB::raw('genre, count(*) as songs'))
			->groupBy('genre')
			->get();
		return response()->json(['status' => 200, 'genresCount' => $genresCount]);
	}

	// public function getCount($genre)
	// {
	// 	$genreCount = Songs::select('select count(genre) from songs where genre=:gerne', ['genre' => $genre]);
	// 	return response()->json(['status' => 200, 'count' => $genreCount]);
	// }
}
