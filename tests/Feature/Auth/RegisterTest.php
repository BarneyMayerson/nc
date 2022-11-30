<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

class RegisterTest extends TestCase
{
    use RefreshDatabase;
    
    /** @test */
    function it_returns_related_inertia_component()
    {
        $response = $this->get('/register');

        $response->assertInertia(fn (Assert $page) => $page
            ->component('Auth/Register')
        );
    }

    /** @test */
    function guest_can_register_an_account()
    {
        $this->withoutExceptionHandling();
        $attributes = [
            'name' => 'newbie',
            'email' => 'newbie@nc.lan',
            'password' => 'password',
            'password_confirmation' => 'password',
        ];

        $response = $this->post('/register', $attributes);

        $this->assertDatabaseHas('users', [
            'name' => 'newbie',
            'email' => 'newbie@nc.lan',
        ]);
    }

    /** @test */
    function it_to_login_the_user_after_registration()
    {
        $attributes = [
            'name' => 'newbie',
            'email' => 'newbie@nc.lan',
            'password' => 'password',
            'password_confirmation' => 'password'
        ];

        $response = $this->post('/register', $attributes);

        $this->assertAuthenticated();
    }

    /** Name attribute validation */
    /** @test */
    function it_requires_a_name()
    {
        $attributes = [
            'email' => 'newbie@nc.lan',
            'password' => 'password',
            'password_confirmation' => 'password'
        ];

        $response = $this->post('/register', $attributes);

        $response->assertSessionHasErrors('name');
        $this->assertDatabaseEmpty('users');
    }

    /** @test */
    function name_must_be_at_least_3_characters()
    {
        $attributes = [
            'name' => 'aw',
            'email' => 'newbie@nc.lan',
            'password' => 'password',
            'password_confirmation' => 'password'
        ];

        $response = $this->post('/register', $attributes);

        $response->assertSessionHasErrors('name');
        $this->assertDatabaseEmpty('users');
    }

    /** @test */
    function name_must_be_up_to_22_characters()
    {
        $attributes = [
            'name' => 'VeryLongName goes here!', // length = 23
            'email' => 'newbie@nc.lan',
            'password' => 'password',
            'password_confirmation' => 'password'
        ];

        $response = $this->post('/register', $attributes);

        $response->assertSessionHasErrors('name');
        $this->assertDatabaseEmpty('users');
    }

    /** @test */
    function name_must_be_unique()
    {
        User::create([
            'name' => 'SameName',
            'email' => 'test@nc.lan',
            'password' => 'password',
        ]);

        $attributes = [
            'name' => 'SameName',
            'email' => 'newbie@nc.lan',
            'password' => 'password',
            'password_confirmation' => 'password'

        ];

        $response = $this->post('/register', $attributes);

        $response->assertSessionHasErrors('name');
        $this->assertDatabaseCount('users', 1);
    }

    /** Email attribute validation */
    /** @test */
    function it_requires_an_email()
    {
        $attributes = [
            'name' => 'newbie',
            'password' => 'password',
            'password_confirmation' => 'password'

        ];

        $response = $this->post('/register', $attributes);

        $response->assertSessionHasErrors('email');
        $this->assertDatabaseEmpty('users');
    }

    /** @test */
    function email_must_be_valid_email_address()
    {
        $attributes = [
            'name' => 'newbie',
            'email' => 'newbie@nc',
            'password' => 'password',
            'password_confirmation' => 'password'

        ];

        $response = $this->post('/register', $attributes);

        $response->assertSessionHasErrors('email');
        $this->assertDatabaseEmpty('users');
    }

    /** @test */
    function email_must_be_unique()
    {
        User::create([
            'name' => 'Sally',
            'email' => 'test@nc.lan',
            'password' => 'password',
        ]);

        $attributes = [
            'name' => 'Johnny',
            'email' => 'test@nc.lan',
            'password' => 'password',
            'password_confirmation' => 'password'

        ];

        $response = $this->post('/register', $attributes);

        $response->assertSessionHasErrors('email');
        $this->assertDatabaseCount('users', 1);
    }

    /** Password attribute validation */
    /** @test */
    function it_requires_a_password()
    {
        $attributes = [
            'name' => 'newbie',
            'email' => 'newbie@nc.lan',
        ];

        $response = $this->post('/register', $attributes);

        $response->assertSessionHasErrors('password');
        $this->assertDatabaseEmpty('users');
    }

    /** @test */
    function password_must_be_at_least_6_characters()
    {
        $attributes = [
            'name' => 'newbie',
            'email' => 'newbie@nc.lan',
            'password' => 'passw',
            'password_confirmation' => 'passw'

        ];

        $response = $this->post('/register', $attributes);

        $response->assertSessionHasErrors('password');
        $this->assertDatabaseEmpty('users');
    }

    /** @test */
    function password_must_have_no_whitespaces()
    {
        $attributes = [
            'name' => 'newbie',
            'email' => 'newbie@nc.lan',
            'password' => 'pass word',
            'password_confirmation' => 'pass word'

        ];

        $response = $this->post('/register', $attributes);

        $response->assertSessionHasErrors('password');
        $this->assertDatabaseEmpty('users');
    }

    /** @test */
    function password_must_be_confirmed()
    {
        $attributes = [
            'name' => 'newbie',
            'email' => 'newbie@nc.lan',
            'password' => 'password',
            'password_confirmation' => null,
        ];

        $response = $this->post('/register', $attributes);

        $response->assertSessionHasErrors('password');
        $this->assertDatabaseEmpty('users');
    }
}
