<?php

namespace App\Http\Setting\Controllers;

use App\Domain\Setting\Models\Setting;
use App\Domain\Setting\Services\SettingService;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Setting\Requests\StoreSettingRequests;
use App\Http\Setting\Requests\UpdateSettingRequests;
use App\Http\Setting\Resources\SettingResource;
use App\Support\Services\Media\ImageService;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Inertia\Inertia;

class SettingController extends BaseController
{
    public function __construct(protected SettingService $service)
    {
    }

    /**
     * Display a listing of the resource.
     *
     * @return RedirectResponse|\Inertia\Response
     */
    public function index(): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render('Dashboard/settings/SettingPage',
                [
                    'settings' => SettingResource::collection(Setting::with('logo')->get())
                ]
            );
        } catch (Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreSettingRequests $request
     * @return RedirectResponse
     */
    public function store(StoreSettingRequests $request): RedirectResponse
    {
        try {
            $this->service->store($request->validated());
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    /**
     * @param Setting $setting
     * @param StoreMediaRequest $request
     * @param ImageService $imageService
     * @return RedirectResponse
     */
    public function uploadLogo(Setting $setting, StoreMediaRequest $request, ImageService $imageService): RedirectResponse
    {
        try {
            $this->service->uploadColorImage($setting, $request, $imageService);
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateSettingRequests $request
     * @param Setting $setting
     * @return RedirectResponse
     */
    public function update(UpdateSettingRequests $request, Setting $setting): RedirectResponse
    {
        try {
            $this->service->update($setting, $request->validated());
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Setting $setting
     * @return RedirectResponse
     */
    public function destroy(Setting $setting): RedirectResponse
    {
        try {
            $this->service->delete($setting);
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }
}
